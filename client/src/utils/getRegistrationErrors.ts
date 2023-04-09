export const getRegistrationErrors = (nickname: string, pass: string, repeatPass: string) => {
    const errors = []
    if (!nickname) {
        errors.push(1)
    }
    if (!pass) {
        errors.push(5)
    }
    if (!repeatPass) {
        errors.push(7)
    }
    return errors
}