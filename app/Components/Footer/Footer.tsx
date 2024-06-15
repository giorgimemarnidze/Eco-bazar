import styles from './Footer.module.scss';
import Image from 'next/image';
import FooterFirst from './FooterFirst/FooterFirst';
import FooterSecond from './FooterSecond/FooterSecond';
import FooterLast from './FooterLast/FooterLast';


const Footer = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <FooterFirst />
                <FooterSecond />
            </div>
            <FooterLast />
        </div>
    )
}

export default Footer;