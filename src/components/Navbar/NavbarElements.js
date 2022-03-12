import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  background: #0E0F19;
  height: 10vh;
  display: flex;
  width: 100vw;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
  filter:{bluramount}
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #F9D390;
    background:linear-gradient(black 25%, #CA9E51)
  }
`;
export const NavLink2 = styled(Link)`
  position: fixed;
  display: flex;
  align-items: center;
  height: 4vh;
  padding-right: vh;
`;


export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width:70vw;
  margin-left:15vw;
  margin-right:15vw;
  @media screen and (max-width: 1580px) {
    display: none;
  }
`;
;
