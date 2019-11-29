import styled from 'styled-components';
import { colors, size } from "../../assets/references";

export const Container = styled.div`
  padding: 10px;
  color: ${colors.black};
  @media (max-width: ${size.tablet}) {
    display: flex;
    flex-direction: column;
  }
`

export const Cards = styled.div`
  height: 50px;
  width: 80px
  border: 1px solid;
  border-radius: 20px;
  color: ${colors.blue};
  display: flex;
  justify-content: center;
  align-content: center;
  svg {
    font-size: 32px;
    margin-top: 10px;
  }
  &:hover{
    background: ${colors.blue};
    color: ${colors.white};
  }
`