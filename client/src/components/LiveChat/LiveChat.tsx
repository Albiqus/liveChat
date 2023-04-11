import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Wrapper } from "./LiveChat-styles"
import { Login } from "./Login/Login"
import { Registration } from "./Registration/Registration"
import history from "../../history"


export const LiveChat = () => {
    return (
 
        <Wrapper>
            <BrowserRouter >
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/registration' element={<Registration />} />
                </Routes>
            </BrowserRouter >
        </Wrapper>
    )
}