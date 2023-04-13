export const registrationErrors: { [index: number]: string } = {
    1: 'nickname is required',
    2: 'nickname is busy',
    3: 'invalid nickname length',
    4: 'invalid nickname symbols',
    5: 'password is required',
    6: 'password must have at least 10 characters',
    7: 'password repetition is required',
    8: 'password mismatch',
    9: 'incorrect login or password'
}

export const nickErrorIds = [1, 2, 3, 4]
export const passErrorIds = [5, 6, 9]
export const repeatPassErrorIds = [7, 8]

export const emptyNickErrorId = 1
export const busyNickErrorId = 2
export const invalidNickLengthErrorId = 3
export const invalidNickSymbolsErrorId = 4
export const emptyPassErrorId = 5
export const invalidPassLengthErrorId = 6
export const emptyRepeatPassErrorId = 7
export const mismatchPassErrorId = 8
export const incorrectValuesErrorId = 9
