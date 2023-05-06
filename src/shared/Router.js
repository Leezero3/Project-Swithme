// import { formToJSON } from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Join, Login, NewPost, StudyGroupBoard, DetailPost } from "pages/index";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudyGroupBoard />}/>
                <Route path="/new-post" element={<NewPost />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/join" element={<Join />}/>
                <Route path="/detail-post" element={<DetailPost />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
