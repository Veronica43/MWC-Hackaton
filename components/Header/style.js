import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;

  align-items: center;

  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(199, 13, 153, 1) 100%
  );
  gap: 1rem;

  width: 100%;
  padding: 0.5rem;

  @media (max-width: 600px) {
    width: 180%;
  }
`;

export const Nav = styled.ul`
  display: flex;

  gap: 1.5rem;

  font-weight: bold;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 3rem;
  }
`;
