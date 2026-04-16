import logo from "../../assets/img/logo-v1.png"
import styles from "./Home.module.css"
function Home(){
    return(
        <div className={styles.homeContainer}>
            <img src={logo} className={styles.logo}></img>
        </div>
    );
}   
export default Home;