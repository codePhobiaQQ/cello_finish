import styles from "./Footer.module.sass";
import {Container} from "reactstrap";
import Link from "next/link";
import Logo from "../../../public/assets/img/Logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container style={{display: "flex", justifyContent: "space-between"}}>
        <Link href="/">
          <a>
            <img style={{ height: "100px" }} src={Logo.src} alt="Logo"/>
          </a>
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link href="/">
              <a>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                Home
              </a>
            </Link>
          </li>
        </ul>
      </Container>
      <span className={styles.rights}>@Все права защищены 2021</span>
    </footer>
  );
};

export default Footer;