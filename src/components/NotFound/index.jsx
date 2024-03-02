import IssueLoupe from "../../assets/issue-loupe.svg";
import styles from "./styles.module.css";

export function NotFound() {
  return (
    <div className={styles.not_found_container}>
      <img src={IssueLoupe} alt="Issue loupe" />
    </div>
  );
}