import { EditIcon, Logo } from "../Icons";

const Header = () => {
  return (
    <header>
      <h1>
        <Logo />
        My Task Board
        <EditIcon />
      </h1>
      <h2>Tasks to keep organized</h2>
    </header>
  );
};

export default Header;
