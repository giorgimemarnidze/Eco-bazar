import Link from 'next/link';
import styles from './FooterFirst.module.scss';
import Image from 'next/image';



const FooterFirst = () => {

    return (
        <div className={styles.container}>
            <Image src={'./logo-footer.svg'} alt='image' width={183} height={38} />
            <p>
                Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
            </p>
            <div className={styles.text}>
                <span className={styles.underline}>
                    <Link href={'tel:(219) 555-0114'} className={styles.link}>(219) 555-0114</Link>
                </span>
                <span>or</span>
                <span className={styles.underline}>
                    <Link href={'mailto:Proxy@gmail.com'} className={styles.link}>Proxy@gmail.com</Link>
                </span>
            </div>
        </div>
    )
}


export default FooterFirst;