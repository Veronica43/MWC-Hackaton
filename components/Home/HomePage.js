import {
  ContainerHome,
  Text,
  ButtonPrimary,
  ImageContainer,
  ContainerText,
} from "./style";
import Link from "next/link";
import Image from "next/image";
import ImageAvion from "../../public/img/a.png";
import Button from "@mui/material/Button";

const HomePage = () => {
  return (
    <ContainerHome>
      <ContainerText>
        <Text>Welcome to the A.P.D.R.H Dashboard</Text>
        <Link href="/company-form">
          <ButtonPrimary>Create Company</ButtonPrimary>
        </Link>
      </ContainerText>
      <ImageContainer>
        <Image src={ImageAvion} alt="avion" width={400} height={400} />
      </ImageContainer>
    </ContainerHome>
  );
};

export default HomePage;
