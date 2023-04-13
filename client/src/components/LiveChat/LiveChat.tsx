import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Wrapper } from "./LiveChat-styles"
import { Login } from "./Login/Login"
import { Registration } from "./Registration/Registration"
import { HomePage } from "./HomePage/HomePage"


export const LiveChat = () => {

    return (
        <Wrapper>
            <BrowserRouter >
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/registration' element={<Registration />} />
                    <Route path='user/:userId' element={<HomePage />} />
                </Routes>
            </BrowserRouter >
        </Wrapper>
    )
}