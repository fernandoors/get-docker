import styled from 'styled-components';
import { colors } from "../../assets/references";

export const Foot = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 30px;
  background: ${colors.blue};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  a, a:active {
    color: ${colors.white};
    font-size: 18px;
    align-self: center;
  }
  label{
    align-self: center;
    font-size: 16px;
    margin-right: 10px;
  }
`