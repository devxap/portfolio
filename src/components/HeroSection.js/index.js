import React from 'react';
import styled from 'styled-components'; 
import ham from '../../data/Heropic.jpg'

const Hero=styled.div`
display: flex;
width: 100%;
background-color: #0d0d0d;
@media screen and (max-width: 768px) {
 flex-direction   :column ;
 justify-content: center;
 align-items: center;
}
`
const HeroInnerContainer=styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-top: 70px;
flex-direction: row;

@media screen and (max-width: 768px) {
 flex-direction :column ;
 justify-content: center;
 align-items: center;
 width: 90%;
}
`
const InnerLeftContainer=styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 50%;
padding: 20px;
@media screen and (max-width: 768px) {
 flex-direction   :column ;
 justify-content: center;
 align-items: center;
 width: 100%;
 padding: 0;
}
`

const InnerRightContainer=styled.div`
display: flex;
justify-content: center;
flex-direction: row;
width: 45%;
@media screen and (max-width: 768px) {
 flex-direction   :column ;
 justify-content: center;
 align-items: center;
 width: 100%;
}

`

const Hi=styled.div`
display: flex;
justify-content: left;
width: 100%;
color: #CB16F8;
margin-left: 5px;
@media screen and (max-width: 768px) {
 text-align: center;
 justify-content: center;
}
`

const Title=styled.div`
display: flex;
flex-direction: column;
justify-content: left;
flex-shrink: 0;
color: #CB16F8;
font-size: 4.5rem;
font-style: normal;
font-weight: 400;
letter-spacing: -0.1875rem;
line-height: 90px;
margin-top: -10px;

@media screen and (max-width: 1280px) {
 font-size: 4rem;

}

@media screen and (max-width: 1000px) {
 font-size: 3rem;
 line-height: 70px;

}

@media screen and (max-width: 768px) {
 font-size: 3rem;
 line-height: 60px;
 text-align: center;
 margin-top: 0;
}
`
const Minititle=styled.div`
display: flex;
flex-direction: column;
justify-content: left;
flex-shrink: 0;
color: #FFF;
font-size: 1.2rem;
font-style: normal;
line-height: normal;
margin-top: 60px;

@media screen and (max-width: 768px) {
 font-size: 1.2rem;
 line-height: 60px;
 text-align: center;
 margin-top: 0;
}
`
const Subtitle=styled.div`
display: flex;
width: 90%;
flex-direction: column;
justify-content: left;
flex-shrink: 0;
color: #7A7A7A;
font-size: 1.3rem;
font-style: normal;
line-height: normal;
margin-top: 20px;
@media screen and (max-width: 768px) {
 font-size: 1.3rem;
 line-height: 25px;
 text-align: center;
 margin-top: 0;
}
`

const Cta=styled.div`
display: flex;
width: 12.3125rem;
height: 3.3125rem;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
margin-top: 50px;
border: 3px solid #CB16F8;
font-size: 2rem;
color: #CB16F8;
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover{
    background-color: #CB16F8;
    opacity: 0.9;
    color: white;
}
`

const Image=styled.img`
    width: 100%;
    height: 100%;
    border-radius: 30% 58% 31% 58% / 44% 31% 54% 49%;
    max-width: 400px;
    max-height: 400px;
    object-fit: cover;
    object-position: center;
    margin-top: 100px;
    box-shadow: 10px 10px 100px 5px blueviolet;
    transition: all 0.5s ease;
    
    @media screen and (max-width: 768px) {
     height:100%;
     width: 100%;
     border-radius:100% 51% 100% 69% / 100% 100% 50% 80% ;
     margin-bottom: 100px;
    }

`


const HeroSection = () => {
    return (
        <>
        <Hero>
            <HeroInnerContainer>
                <InnerLeftContainer>
                    <Hi>Hi,</Hi>
                    <Title>I am Avinash Pandey, a developer at heart, a product designer by skill & a freelancer by time.</Title>
                    <Minititle>I write code to fall asleep.</Minititle>
                    <Subtitle>I am enthusiastic about technology and business 
                        and try to explore these areas through my daily learnings 
                        and implementations. 
                        You can see my current learnings on my Github, provided below.</Subtitle>
                    <Cta>Github.</Cta>
                </InnerLeftContainer>
                <InnerRightContainer>
                   
                    <Image src={ham}/>
                </InnerRightContainer>
            </HeroInnerContainer>
        </Hero>
        </>
        );
}
  
export default HeroSection;