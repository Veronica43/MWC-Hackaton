import Image from "next/image";
import Logos from "../../public/img/logos.png";
import { LogosContainer, FooterContainer } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <LogosContainer>
        <Image src={Logos} alt="logos" />
      </LogosContainer>
    </FooterContainer>
  );
};

export default Footer;
