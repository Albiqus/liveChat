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

export const Header = styled.h1`
    font-family: 'UnivaFontBold';
    text-align: center;
    margin-top: 50px;
`

export const Paragraph = styled.p`
    font-family: 'UnivaFontLight';
    text-align: center;
    font-size: 25px;
`

export const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Label = styled.label`
    display: block;
    text-align: center;
    margin-top: 40px;
    font-size: 20px;
    font-family: 'UnivaFontLight';
`

export const Placeholder = styled.img`
    position: absolute;
    right: 0;
    top: 45px;
    right: 30px;
    &:hover{
        cursor: pointer;
    }
`

export const Tooltip = styled.div`
    position: absolute;
    height: auto;
    width: 200px;
    bottom: 55px;
    left: 170px;
    padding: 10px 10px 10px 10px;
    background-color: rgb(0, 0, 0);
    border-radius: 10px 10px 10px 0px;
`

export const P = styled.p`
    text-align: center;
    margin: 0 auto;
    color: white;
    font-family: 'custom', sans-serif;
    font-size: 13px;
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

export const Wrapper = styled.div`
    position: relative;
`

export const Hint = styled.p`
    width: 100%;
    font-family: 'UnivaFontLight';
    text-align: center;
    font-size: 16px;
`
