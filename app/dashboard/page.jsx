import styles from "./dashboard.module.css";

export default function Dashboard() {
    return(
    <div className={styles.sidebar}>
    <div className={styles.sidebarlinks}>

        <div className={styles.backgroundlogo}>TB</div>
        <div className={styles.logoname}>TANF Bank</div>
    </div>
    </div>
    )
}