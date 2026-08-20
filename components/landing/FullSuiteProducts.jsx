import styles from "./fullsuiteproducts.module.css";





export default function FullSuiteProducts() {
    return (
        <>
            <h2 className={styles.fullsuiteproducts}>We've created a full<br></br> suite of products</h2>
            <section className={styles.suiteproductssection}>
            <section className={styles.suiteproductsone}>
                <img src="/IconWallet.svg" alt="payment feature info" className={styles.iconwallet} width={35} height={20}></img>
                <h6 className={styles.paymentfeatureultimate}>Payment Feature Ultimate</h6>
                <span className={styles.paymentfeature}>Securely manage and make approved household payments through a centralized digital payment system.</span>
                </section>
                
                
            <section className={styles.suiteproductsinfotwo}>
                <img src="/IconGraph.svg" alt="analytics info" className={styles.icongraph} width={35} height={20}></img>
                <h6 className={styles.finance}>Finance Analytics</h6>
                <span className={styles.financeanalytics}>Securely manage and make approved household payments through a centralized digital payment system.</span>
                
                </section>
            <section className={styles.suiteproductsinfothree}>
                <img src="/IconGraph.svg" alt="analytics info" className={styles.icongraph} width={35} height={20}></img>
                <h6 className={styles.software}>Intelligent Software</h6>
                <span className={styles.intelligentsoftware}>Securely manage and make approved household payments through a centralized digital payment system.</span>
                </section>
                
            </section>
        </>
    )
}