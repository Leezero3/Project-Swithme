import React from "react";
import { Layout } from "common/feature";
import Banner from "features/Board/banner";
import Board from "features/Board/board";

function studyGroupBoard() {
    return (
        <div>
            <Banner />

            <Layout>
                <Board />
            </Layout>
                    <div/>
    );
}

export default studyGroupBoard;
