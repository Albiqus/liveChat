export const getValidData = (nick: string, pass: string, repeatPass: string, candidate: any) => {
    let isValid = true
    let errors: number[] = []
    if (candidate) {
        errors.push(2)
        isValid = false
    }
    if (nick.length < 4 || nick.length > 10) {
        errors.push(3)
        isValid = false
    }
    if (!/^[a-zA-Z0-9_]*$/.test(nick)) {
        errors.push(4)
        isValid = false
    }
    if (pass.length < 10) {
        errors.push(6)
        isValid = false
    }
    if (pass !== repeatPass) {
        errors.push(8)
        isValid = false
    }

    return { isValid , errors}
}

