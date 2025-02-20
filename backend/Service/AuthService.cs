using backend.Controllers;
using backend.Providers;
using backend.Types;

namespace backend.Service
{
    public class UserAlreadyExitsException : Exception
    {
        public UserAlreadyExitsException(string email) : 
            base($"Уже есть зарегистрированный пользователь с почтой {email}.") { }
    }

    public class UserNotExitsException : Exception
    {
        public UserNotExitsException(string message) :
            base(message) { }
    }

    public class UserNotExitsExceptionByEmail : UserNotExitsException
    {
        public UserNotExitsExceptionByEmail(string email) :
            base($"Пользователь с почтой {email} отсутствует.") { }
    }

    public class IncorrectOtpCodeException : Exception
    {
        public IncorrectOtpCodeException() : base("Некорректный OTP код.") { }
    }

    public class SessionNotExitsException : Exception
    {
        public SessionNotExitsException(string token) : base($"Сессия с токеном {token} не найдена") { }
    }

    public class AuthService
    {
        private static readonly Random random = new Random();

        public static void Register(RegisterDto data)
        {
            // Получаем пользователя:
            User? user = ProvidersMarshal.UserProvider.GetByEmail(data.Email);

            // Проверяем, есть ли уже пользователь с таким email:
            if (user != null && user.Verify)
            {
                throw new UserAlreadyExitsException(data.Email);
            }

            // Добавляем запись о пользователе:
            user = ProvidersMarshal.UserProvider.Add(new User
            {
                Name = data.Name,
                Email = data.Email,
                Verify = false
            });

            // Формируем отп код:
            int code = random.Next(1000, 9999);
            ProvidersMarshal.OtpProvider.Add(new Otp
            {
                UserId = user.Id,
                Code = code
            });

            // Отправляем на почту отп код:
            EmailService.SendEmail(data.Email, "Авторизация", $"Ваш OTP код: {code}.");
        }

        public static void Auth(string email)
        {
            // Получаем пользователя:
            User? user = ProvidersMarshal.UserProvider.GetByEmail(email);

            // Проверяем, есть ли уже пользователь с таким email:
            if (user == null)
            {
                throw new UserNotExitsExceptionByEmail(email);
            }

            // Формируем отп код:
            int code = random.Next(1000, 9999);
            ProvidersMarshal.OtpProvider.Add(new Otp
            {
                UserId = user.Id,
                Code = code
            });

            // Отправляем на почту отп код:
            EmailService.SendEmail(email, "Авторизация", $"Ваш OTP код: {code}.");
        }

        public static bool Logout(string token)
        {
            return ProvidersMarshal.AuthProvider.DeleteByToken(token);
        }

        public static Auth? VerifyOtp(VerifyOtpDto data)
        {
            // Получаем пользователя:
            User? user = ProvidersMarshal.UserProvider.GetByEmail(data.Email);

            // Проверяем, есть ли уже пользователь с таким email:
            if (user == null)
            {
                throw new UserNotExitsExceptionByEmail(data.Email);
            }

            // Поиск инстанции отп:
            Otp? otp = ProvidersMarshal.OtpProvider.GetByUser(user.Id);

            // Если данные не были найдены: 
            if (otp == null)
            {
                throw new UserNotExitsException("Данные не найдены.");
            }

            // Если код не подршел:
            if (otp.Code != Int32.Parse(data.Otp))
            {
                throw new IncorrectOtpCodeException();
            }

            // Используем отп код:
            otp.Expired = true;
            ProvidersMarshal.OtpProvider.Update(otp);

            // Помечаем пользователя как верифицированного:
            user.Verify = true;
            ProvidersMarshal.UserProvider.Update(user);

            // Генерируем новую сессию и возвращаем ее:
            return ProvidersMarshal.AuthProvider.Add(new Auth { UserId = user.Id });
        }

        public static User? FetchUser(string token)
        {
            // Получаем сессию:
            Auth? auth = ProvidersMarshal.AuthProvider.GetByToken(token);

            if (auth == null)
            {
                throw new SessionNotExitsException(token);
            }

            return auth.User;
        }
    }
}
