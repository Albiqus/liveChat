import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 70px;
    background-color: gray;
    height: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Div = styled.div`
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
export const Text = styled.span`
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