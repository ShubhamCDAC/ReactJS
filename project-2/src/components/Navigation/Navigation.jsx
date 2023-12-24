
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={
            `container ${styles.navigation}`
        }>
            <div className="logo">
                <img src="/images/logo.png" alt="logo"></img>
            </div>
            <ul>
                <li>Home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
    );
};

export default Navigation;