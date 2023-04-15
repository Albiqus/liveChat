export const registrationErrors: { [index: number]: string } = {
    1: 'nickname is required',
    2: 'nickname is busy',
    3: 'invalid nickname length',
    4: 'invalid nickname symbols',
    5: 'password is required',
    6: 'password must have at least 10 characters',
    7: 'password repetition is required',
    8: 'password mismatch',
}

export const nickErrorIds = [1, 2, 3, 4]
export const passErrorIds = [5, 6]
export const repeatPassErrorIds = [7, 8]
