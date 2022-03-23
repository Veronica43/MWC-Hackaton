import styled from "@emotion/styled";

export const ContainerHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 4rem;
  margin-left: 3rem;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 50%;

    gap: 3rem;
  }
`;
export const ImageContainer = styled.div`
  margin-top: 4rem;
`;

export const ContainerText = styled.div`
  color: black;
  margin-top: 2rem;
  @media (max-width: 600px) {
  }
`;
export const ButtonPrimary = styled.a`
  color: white;
  background: black;
  border: 1px solid white;
  border-radius: 1rem;
  padding: 0.8rem;
  cursor: pointer;
  position: ${(props) => (props.absolute ? "absolute" : "null")};
  @media (max-width: 600px) {
  }
`;

export const Text = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
  }
`;
