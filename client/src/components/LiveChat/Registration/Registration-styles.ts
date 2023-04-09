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

export const ButtonBox = styled.div`
    margin-top: 70px;
    background-color: gray;
    height: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Button = styled.div`
    color: #FFF;
    transition: all 0.5s;
    position: relative;
    line-height: 50px;
    height: 50px;
    text-align: center;
    width: 250px;
    cursor: pointer;
    &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255,255,255,0.1);
    transition: all 0.3s;
    }
    &:hover::before{
    opacity: 0 ;
    transform: scale(0.5,0.5);
    }
    &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    outline: 2px solid rgba(255,255,255,0.5);
    transform: scale(1.2,1.2);
    }
    &:hover::after{
    opacity: 1;
    transform: scale(1,1);
    }
`

export const ButtonText = styled.span`
    font-family: 'UnivaFontLight';
    font-size: 20px;
`

export const Preloader = styled.img`
    position: absolute;
    left: 75px;
    top: -25px;
    width: 100px;
    height: 100px;  
`


