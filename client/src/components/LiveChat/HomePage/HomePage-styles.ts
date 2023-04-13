import styled from 'styled-components'


export const Div = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    margin-top: 100px;
    width: 700px;
    height: 700px;
    background-color: #ABABAB;
    border-radius: 15px 15px 15px 15px;
`

export const Nickname = styled.p`
    font-family: 'UnivaFontLight';
    text-align: center;
    margin-top: 40px;
    font-size: 35px;
`

export const Paragraph = styled.p`
    font-family: 'UnivaFontLight';
    text-align: center;
    width: 100%;
    margin-top: 20px;
    font-size: 25px;
`

export const LogoutButton = styled.img`
    transform: scale(0.9);
    position: absolute;
    right: 0;
    top: 45px;
    right: 40px;
    &:hover{
        cursor: pointer;
    }
`

export const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    position: relative;
`

export const Label = styled.label`
    display: block;
    text-align: center;
    margin-top: 40px;
    font-size: 20px;
    font-family: 'UnivaFontLight';
`
export const Input = styled.input`
    font-family: 'UnivaFontLight';
    margin-top: 10px;
    font-size: 20px;
    width: 200px;
    border: none;
    box-sizing: border-box;
    outline: none;
`
