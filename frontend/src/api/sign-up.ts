"use server"

interface ISignUpData{
    email: string,
    name: string
}
export async function SignUpUser ({email, name}:ISignUpData){
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('')
        },2000)
    })

    console.log('успех')
}