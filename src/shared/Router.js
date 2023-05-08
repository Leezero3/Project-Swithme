// import { formToJSON } from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Join, Login, NewPost, StudyGroupBoard, NotFound } from "../pages";
import { DetailPost } from "pages/index";
import { Header, Footer } from "common/feature";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<StudyGroupBoard />} />
                <Route path="/new-post" element={<NewPost />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/detail-post" element={<DetailPost />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
