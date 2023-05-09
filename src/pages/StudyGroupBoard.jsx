import React from "react";
import { Layout } from "common/feature";
import Banner from "features/Board/banner";
import Board from "features/Board/board";

function studyGroupBoard() {
    return (
        <>
            <Banner />

            <Layout>
                <Board />
            </Layout>
        </>
    );
}

export default studyGroupBoard;
