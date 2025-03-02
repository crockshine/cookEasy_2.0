
interface ISignInData{
    email: string,
}
export async function SignInUser ({email}:ISignInData){
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('')
        },2000)
    })

    console.log('успех')
}