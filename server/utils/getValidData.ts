export const getValidData = (nick: string, pass: string, repeatPass: string) => {
    let isValid = true
    let errors: object[] = []

    if (nick.length < 4 || nick.length > 10) {
        errors.push({ errorId: 1, description: 'недопустимая длина ника'})
        isValid = false
    }
    if (!/^[a-zA-Z0-9_]*$/.test(nick)) {
        errors.push({ errorId: 2, description: 'некорректные символы ника'})
        isValid = false
    }
    if (pass.length < 10) {
        errors.push({ errorId: 3, description: 'пароль должен иметь минимум 10 символов'})
        isValid = false
    }
    if (pass !== repeatPass) {
        errors.push({ errorId: 4, description: 'пароли не совпадают'})
        isValid = false
    }

    return { isValid , errors}
}
