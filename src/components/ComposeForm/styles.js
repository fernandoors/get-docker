import styled from 'styled-components';
import { colors, size } from "../../assets/references";

export const Container = styled.div`
  padding: 10px;
  color: ${colors.black};
  @media (max-width: ${size.tablet}) {
    display: flex;
    flex-direction: column;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`