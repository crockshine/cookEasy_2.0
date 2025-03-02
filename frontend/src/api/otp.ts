export async function checkOTP (otp: string){

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('')
        },2000)
    })
    
    console.log('успех')
}