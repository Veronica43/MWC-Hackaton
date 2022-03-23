import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const WrapperForm = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 150%;
    margin-left: 4rem;
    padding: 4rem;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Camp = styled.div`
  margin-top: 2rem;
`;

export const Input = styled.input`
  width: 95%;
  padding: 1rem;
  border-radius: 0.5rem;
  background: transparent;

  margin-bottom: 2rem;
`;

export const Select = styled.select`
  width: 95%;
  padding: 1rem;
  border-radius: 0.5rem;
  background: transparent;
`;

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  margin-top: 7rem;
`;

export const ButtonSave = styled(Button)`
  position: ${(props) => (props.absolute ? "absolute" : "null")};

  background-color: black;
  color: white;
  width: 50%;
  height: 3rem;
  margin-top: 2rem;
  @media (max-width: 600px) {
    width: 80%;
  }
`;
