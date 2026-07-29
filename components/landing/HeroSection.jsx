import styles from "./herosection.module.css";
import Image from "next/image";





export default function HeroSection() {
    return(
    <section className={styles.herosection}>
        <div className={styles.leftherosection}>
        <h1 className={styles.heading}>Novus can <br></br>maximize your <br></br>money flow.</h1>
        No more waiting in long lines for money orders. <br></br>
        Fewer trips to ATMs and banks. <br></br>
        Only through this platform, pay bills directly with your EBT TANF card.
        
        <span className={styles.heroheadingtext}>

        <span className={styles.buttons}>
        <button className={styles.getstartedbutton}>Get Started</button>
        <h6 className={styles.learnmore}>Learn More</h6>
        </span>

        
        </span>
        
                <span className={styles.tanfbenefits}>
                    <img src="/Icon.svg" alt="icon" className="easyaccessicon" width={20} />
                    Easy Access To TANF Benefits
                </span>

        </div>

        <span className={styles.womancard}>
        <Image 
        src="/group1.png"
        alt="banking card"
        width={350}
        height={320}
        className={styles.bankingcard}
        />
        </span>
        
        
        
    </section>
    )
}