import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function header() {
  return (
    <Header>
        <Link to='/' title='메인페이지로 이동' className='logo'><span>S</span>withMe</Link>
        <nav>
            <Link to='/Login'>Login</Link>
            <Link to='/Join'>Sign up</Link>
        </nav>
    </Header>
  )
}

export default header;


const Header = styled.header`
    width:100%;
    max-width:1200px;
    margin:0 auto;
    height:80px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    & .logo{
        font-size:30px;
        font-weight:700;
    }
    & nav a:last-child{
        margin-left:20px;
    }
`
