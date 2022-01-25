import styles from "./Header.module.sass";

interface IHeader {
  children: any;
}

const Header = ({ children }: IHeader) => {
  return <div className={styles.header}>fsd</div>;
};

export default Header;
