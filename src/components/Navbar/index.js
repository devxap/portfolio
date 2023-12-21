import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../context/UserContext';

const Nav = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 75px;
  position: fixed;
  z-index: 10;
`;

const InnerContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #0e0e0e;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-left: 100px;
`;

const Hamburger = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  margin-right: 0px;
  align-items: center;
  justify-content: center;
  padding: 0px 25px;
`;

const IconContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: none;
  border: none;
  transition: transform 0.5s ease-in-out; /* Added transition effect */
  &:hover {
    transform: rotate(360deg); /* Optional: Add a scale effect on hover */
  }
`;

const Line = styled.div`
  width: 30px;
  border: 1px solid white;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #1e1e1e;
  margin: auto;
  position: sticky;
  align-items: center;
`;

const Navlist = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin-left: auto;
  position: fixed;
  margin-top: 70px;
  z-index: 10;

`;

const NavListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #1e1e1e;
  gap: 42px;
`;

const Navlink = styled.a`
  display: flex;
  justify-content: left;
  color: white;
  font-size: 2em;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover{
    color: blueviolet;
  }
`;

const NavCancel = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  margin-right: 0px;
  align-items: center;
  justify-content: center;
  padding: 0px 25px;
`;

const CancelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: none;
  border: none;
  transition: transform 0.5s ease-in-out; /* Added transition effect */
  &:hover {
    transform: rotate(360deg); /* Optional: Add a scale effect on hover */
  }
`;

const Xline1 = styled.div`
  width: 30px;
  border: 1px solid white;
  transform: rotate(45deg);
`;

const Xline2 = styled.div`
  width: 30px;
  border: 1px solid white;
  transform: rotate(-45deg);
`;

const Navbar = () => {
  const { IsHamclick, SetIsHamclick } = useContext(UserContext);

  const HamClick = () => {
    SetIsHamclick(!IsHamclick);
  };

  if (!IsHamclick) {
    return (
      <Nav>
        <InnerContainer>
          <Name>AP.</Name>
          <Hamburger>
            <IconContainer onClick={HamClick}>
              <Line />
              <Line />
              <Line />
            </IconContainer>
          </Hamburger>
        </InnerContainer>
      </Nav>
    );
  } else {
    return (
      <>
          <Nav>
            <InnerContainer>
              <Name>AP.</Name>
              <NavCancel>
                <CancelContainer onClick={HamClick}>
                  <Xline1 />
                  <Xline2 />
                </CancelContainer>
              </NavCancel>
            </InnerContainer>
          </Nav>

          <Navlist>
            <NavListContainer>
              <Navlink href='#home'>Home</Navlink>
              <Navlink href='#about'>Message Me</Navlink>
              <Navlink href='#contact'>Contact</Navlink>
            </NavListContainer>
          </Navlist>
      </>
    );
  }
};

export default Navbar;
