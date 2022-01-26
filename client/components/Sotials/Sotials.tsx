import styles from "./Sotials.module.sass";

const Sotials = () => {
  return (
    <div className={styles.sotialsWrapper}>
      <ul className={styles.sotialsInner}>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">YouTube</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
      </ul>
    </div>
  );
};

export default Sotials;
