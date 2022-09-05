import LogoStyled from "./LogoStyled";

const Logo = () => {
  return (
    <>
      <LogoStyled>
        <img
          src="./images/logo.png"
          alt="logo próximo destino"
          className="logo__img"
          height={40}
          width={280}
        />
      </LogoStyled>
    </>
  );
};

export default Logo;
