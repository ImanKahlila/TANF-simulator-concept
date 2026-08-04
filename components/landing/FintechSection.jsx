import styles from "../landing/fintech.module.css"





export default function Fintech() {
    return(
    <section className={styles.fintechsection}>
        <img
            src="/fintechcard.png"
            alt="fintech mastercard"
            width={400}
            style={{ margin: "35px", marginLeft: "175px" }}
        />

        <span className={styles.fintechcard}>
            <h1 className={styles.paymentsystem}>
            The role of<br /> Fintech in the <br></br>payment system
            </h1>

        <p className={styles.fintechdescription}>
        Fintech is able to replace the role of formal<br />financial instituions such as banks. In terms of<br />the payment system.
        
        </p>
        <span className={styles.becomeatoolforpayment}>
            <img src="/Icon.svg" width={15} className={styles.checkmarkicon}>
            </img>
            <span className={styles.span}>Become a tool for payment, settlement, and clearing</span>
            
        </span>
        </span>
    </section>
    )
}