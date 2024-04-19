import { Wrapper, Content, Logo } from "./Navbar.style";
import img from "../../assets/troll-face.png";

const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <Logo src={img}></Logo>
        <h1>Meme Generator</h1>
      </Content>
    </Wrapper>
  );
};
export default Navbar;
