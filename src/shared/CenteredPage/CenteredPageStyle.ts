import styled from "styled-components";
import { Title } from "@shared/Typography";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  height: 100%;
  min-height: 80vh;

  & > ${Title} {
    margin-bottom: 2rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  padding: 5% 0;
`;