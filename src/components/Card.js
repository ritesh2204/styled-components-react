import React from "react";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`

0%{
  opacity:0
}

100%{
  opacity:1
}

`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.colors.green};
  background: orange;
  animation: 1s ${fadeIn} ease-in;
  &:hover {
    background: greenyellow;
    cursor: pointer;
  }
  ${({ primary }) =>
    primary &&
    css`
      background: violet;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
      &:hover {
        background: yellow;
      }
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      background: green;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}

    @media ${({ theme }) => theme.mediaQueries.below786}{
     font-size: 0.8rem;
    }
`;

const SuperButton = styled(Title)`
  border-radius: 50px;
  background: black;
  color: white;
`;

const Link = styled.a.attrs(props => ({
  target: "_blank"
}))`
  color: #000;
  font-size: 1rem;
`;

const Card = ({ primary, secondary }) => (
  <React.Fragment>
    <Title>Styled Components</Title>
    <Title primary>Styled Components</Title>
    <Title secondary>Styled Components</Title>
    <SuperButton>My button</SuperButton>

    <Link href="www.google.com">google.com</Link>
  </React.Fragment>
);

export default Card;
