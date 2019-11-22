import styled from 'styled-components';
import { colors } from "../../assets/references";

export const Head = styled.nav`
  width: 100vw;
  height: 40px;
  background: ${colors.blue};
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
`
export const Links = styled.div`
  background: ${colors.blue};
  color: ${colors.white};
  display: flex;
  margin-right: 10px;
  a, a:active {
    padding: 3px;
    width: 50px;
    margin-right: 10px;
    color: ${colors.white};
    text-align: center;
    text-decoration: initial;
    align-self: center;
  }
  a:hover {
    color: ${colors.blue};
    background: ${colors.white};
    border-radius: 20px;
  }
`
export const Img = styled.img`
  width: auto;
  height: 30px;
  margin: 5px 0 0 5px ;
`
