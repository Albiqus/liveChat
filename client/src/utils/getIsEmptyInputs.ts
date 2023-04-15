export const getIsEmptyInputs = (nickname: string, pass: string, repeatPass: string) => {
    return { nickname: !nickname, pass: !pass, repeatPass: !repeatPass }
}