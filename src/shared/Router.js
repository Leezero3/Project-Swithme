// import { formToJSON } from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Join, Login, NewPost, StudyGroupBoard } from "../pages";
import { DetailPost } from "pages/index";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudyGroupBoard />}></Route>
                <Route path="/new-post" element={<NewPost />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/join" element={<Join />}></Route>
                <Route path="/detail-post" element={<DetailPost />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
