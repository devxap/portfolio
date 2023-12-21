import React from 'react';
import styled from 'styled-components';
import Linked from '../../data/Linkedin.png'
import Insta from '../../data/Instagram.png' 

const FooterContainer=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #1e1e1e;
`

const Title=styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 80%;
    color: blueviolet;
    padding: 0px 20px;
`

const IconTray=styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 150px;
    height: 100%;
`

const IconBar=styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
`

const Linkedin=styled.img`
    display: flex;
    width: 30px;
    height: 30px;
`

const Instagram=styled.img`
    display: flex;
    width: 30px;
    height: 30px;
`

const Footer = () => {
    return (
       <>
       <FooterContainer>
        <Title>Avinash Pandey 2023(c) All rights reserved.</Title>
        <IconTray>
        <IconBar>
            <a href="https://linkedin.com"><Linkedin src={Linked}/></a>
            <a href="https://instagram.com"><Instagram src={Insta}/></a>
        </IconBar>
        </IconTray>
       </FooterContainer>
       </>
    );
}
 
 
export default Footer;