import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/addtask">AddTask</Link>
        </li>
        <li>
          <Link href="/edittask">EditTask</Link>
        </li>
      </ul>
    </div>
  );
}
