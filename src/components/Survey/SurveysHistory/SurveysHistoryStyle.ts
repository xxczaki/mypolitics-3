import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.backgroundDarken};
  padding: 1.5rem;
  border-radius: 0.5rem;

  ${breakpoint("md")`
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}

  ${breakpoint("xs", "md")`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 1.5rem;
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 2rem;
  width: auto;
  display: block;

  ${breakpoint("xs", "md")`
    margin: auto;
  `}
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;

  ${breakpoint("xs", "md")`
    grid-gap: 0.75rem;
  `}
`;

export const ListElement = styled.a`
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Chips = styled.span<{ background: "yellow" | "green" }>`
  margin-left: 1rem;
  padding: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  text-align: center;
  ${breakpoint("xs", "md")`
    padding: 0.5rem;
  `}

  ${({ background, theme }) =>
    background === "yellow"
      ? `
    background: ${theme.colors.yellow};
    box-shadow: 0px 0px 24px rgba(242, 201, 76, 0.5);
  `
      : `
    background: ${theme.colors.green};
    box-shadow: 0px 0px 24px 0px #2CD598 50%;
  `}
`;
