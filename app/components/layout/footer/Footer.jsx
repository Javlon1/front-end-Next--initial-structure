
import styles from './Footer.module.scss'
import Nav from './nav/Nav';
import Newsletter from './newsletter/Newsletter';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <Newsletter />
            <Nav />
        </footer>
    )
}

export default Footer;