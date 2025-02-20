using System.Net;
using System.Net.Mail;

namespace backend.Service
{
    public class EmailService
    {
        public static void SendEmail(string mailTo, string subject, string message)
        {
            try
            {
                // Создаем объект сообщения
                MailMessage mail = new MailMessage();
                mail.From = new MailAddress("aleksservera@mail.ru");
                mail.To.Add(mailTo);
                mail.Subject = subject;
                mail.Body = message;

                // Настраиваем SMTP-клиент для Gmail
                SmtpClient smtpServer = new SmtpClient("smtp.mail.ru");
                smtpServer.Port = 587;
                smtpServer.Credentials = new NetworkCredential("aleksservera@mail.ru", "YB6haLwasNUi7PCGnW3y"); // пароль или пароль приложения
                smtpServer.EnableSsl = true;

                smtpServer.Send(mail);
                Console.WriteLine("Письмо успешно отправлено!");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Ошибка: " + ex.Message);
            }
        }
    }
}
