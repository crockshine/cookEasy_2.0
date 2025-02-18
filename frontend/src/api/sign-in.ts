"use server"

interface ISignInData{
    email: string,
}
export async function SignInUser ({email, name}:ISignInData){
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('')
        },2000)
    })

    console.log('успех')
}