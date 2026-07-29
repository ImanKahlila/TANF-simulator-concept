import styles from "./NavBar.module.css";





export default function Navbar() {
    return(
    <nav className={styles.navbar}>

        <h4 className={styles.logoname}>Soudemy</h4>

        <ul className={styles.leftnavlinks}>

        <li className="#">Features</li>
        <li className="#">How It Works</li>
        <li className="#">Products</li>
        <li className="#">Client Stories</li>

        </ul>
        <span className={styles.Oauth}>
        <h6 className={styles.signIn}>Sign In</h6>
        <button className={styles.getstartedbutton}>Get Started</button>
        </span>

    </nav>
    )
}