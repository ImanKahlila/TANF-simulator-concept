import styles from "./herosectioncards.module.css"





export default function HeroSectionCards() {
    return (
        <section className={styles.herosectioncards}>
            <h1 className={styles.appfeatures}>App features that help keep<br></br>money more organized</h1>
            
            <div className={styles.featurecards}>
                <div className={styles.cardone}>
                    <h6 className={styles.financialservices}>Facilitate Financial Services</h6>
                    <p className={styles.billpayment}>See your recent bill payments using TANF</p>
                    <img src="/cardonepayment.png" alt="financial services" className="card1" width={250} style={{ borderRadius: "24px", margin: "15px" }} />
                </div>
                <div className={styles.cardtwo}>
                    <h6 className={styles.fintech}>Fintech as an Alternative Investment Tool</h6>
                    <p className={styles.savings}>Check your savings progress toward your goals, funded straight from your TANF income</p>
                    <img src="/cardtwosavings.png" alt="savings" className="card2" width={250} style={{ borderRadius: "24px", margin: "15px" }}></img>
                </div>
                <div className={styles.cardthree}>
                    <h5 className={styles.financialtransactions}>Financial Transactions Become Easier</h5>
                    <p className={styles.benefits}>Track how your benefits are being spent across categories like investment, food & drink, and shopping</p>
                    <img src="/cardthreestatistic.png" alt="statistics" className="card3" width={250} style={{ borderRadius: "24px", margin: "15px", marginTop: "5px" }}></img>
                </div>
                </div>
                </section>
            
    )
}