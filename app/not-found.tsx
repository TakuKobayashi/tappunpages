import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.code} aria-hidden="true">404</div>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.desc}>
          このページは存在しないか、移動された可能性があります。
        </p>
        <Link href="/" className={styles.btn}>← Back to Home</Link>
      </div>
    </main>
  );
}
