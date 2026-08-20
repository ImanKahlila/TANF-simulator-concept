import styles from "./cashflow.module.css";





export default function CashFlow() {
    return (
        <section className={styles.cashflowhero}>
            <h1 className={styles.cashflowheading}>Get in-depth <br></br>insights on your<br></br>cashflow</h1>

            
            <p className={styles.cashflowinfo}>Give your accouting team a partner they can rely on. <br></br>automate the boring parts and make sure your financial <br></br>calculations are always accurate.</p>
            <span className={styles.financialtransactionsinfo}><img src="/Icon.svg" alt="financial information" className={styles.checkmarkicon} />Financial transactions become easier</span>

            

            <span className={styles.cashflowcard}>
            <img src="/cashflow.png" alt="debit cards and money graph" style={{width: "35%", marginTop: "-260px"}}/>
            </span>
        </section>
    )
}