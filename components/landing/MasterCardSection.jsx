import styles from "./mastercard.module.css";





export default function MasterCardSection() {
    return(
        <>

        <section className={styles.mastercard}>
            <img 
            src="/MasterCard.png"
            alt="Master Card Accepted"
            width={200}
            height={200}

            />

            <p className={styles.testimonial}>"Since I started using Soudemy to manage my TANF benefits, <br></br> everything feels so much easier. I can pay my bills online, chat one-on-one with my caseworker anytime I need support, and never have to make a trip for a money order or wait in line at the ATM. It's all right there on my phone."

— Maria Torres, TANF recipient</p>

            <img
            src="/Card.png"
            alt="Master Card Accepted"
            width={200}
            height={200}

            />

        </section>

        

        </>
    )
}