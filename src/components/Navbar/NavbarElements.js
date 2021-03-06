import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  background: #0E0F19;
  height: 10vh;
  display: flex;
  width: 100vw;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
  font-size: 16px;
  @media screen and (max-width: 1535px) {
    height: 6.3vw;
    padding-top: 0.01vw;
    
  }
  @media screen and (max-width: 1535px) {
    height: 6.3vw;
    padding-top: 0.01vw;
    
  }
  @media screen and (max-width: 1535px) {
    height: 6.3vw;
    padding-top: 0.01vw;
    
  }
  @media screen and (max-width: 640px) {
    height: 12vh;
    padding-top: 0.01vw;
    align-items: center;
    justify-content: space-between;
    padding-top: 5vw;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;

  &:focus {
    color: #F9D390;
    background:linear-gradient(black 25%, #CA9E51)
  }
  @media screen and (max-width: 1200px) {
    display:none;
  }
`;

export const NavLink2 = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  height: 4vh;
`;


export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width:70vw;
  margin-left:15vw;
  margin-right:15vw;
  @media screen and (max-width: 1535px) {
    display: none;
  }
`;
;
