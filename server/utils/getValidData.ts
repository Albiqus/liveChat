import { busyNickErrorId, invalidNickLengthErrorId, invalidNickSymbolsErrorId, invalidPassLengthErrorId, mismatchPassErrorId } from "../data/errorIds"


export const getValidData = (nick: string, pass: string, repeatPass: string, candidate: any) => {
    let isValid = true
    let errors: number[] = []
    if (candidate) {
        errors.push(busyNickErrorId)
        isValid = false
    }
    if (nick.length < 4 || nick.length > 10) {
        errors.push(invalidNickLengthErrorId)
        isValid = false
    }
    if (!/^[a-zA-Z0-9_]*$/.test(nick)) {
        errors.push(invalidNickSymbolsErrorId)
        isValid = false
    }
    if (pass.length < 10) {
        errors.push(invalidPassLengthErrorId)
        isValid = false
    }
    if (pass !== repeatPass) {
        errors.push(mismatchPassErrorId)
        isValid = false
    }

    return { isValid, errors }
}

