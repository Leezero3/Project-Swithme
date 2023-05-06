import React from 'react'
import Layout from '../common/feature/Layout'
import Banner from '../features/Board/banner'
import Board from '../features/Board/board'


function studyGroupBoard() {
  return (
    <div>
        <Layout>
          <Banner />
          <Board />
        </Layout>
    </div>
  )
}

export default studyGroupBoard