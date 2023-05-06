// import { formToJSON } from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Join, Login, NewPost, StudyGroupBoard } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudyGroupBoard />}></Route>
                <Route path="/NewPost" element={<NewPost />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Join" element={<Join />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
