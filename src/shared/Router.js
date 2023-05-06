import { formToJSON } from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../common/feature/GlobalStyles";
import { Join, Login, NewPost, StudyGroupBoard } from '../pages'

const Router = () => {
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<StudyGroupBoard />}></Route>
                <Route path="/NewPost" element={<NewPost />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Join" element={<Join />}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;