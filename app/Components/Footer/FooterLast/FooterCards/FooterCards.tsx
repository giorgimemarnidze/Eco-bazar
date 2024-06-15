import styles from './FooterCards.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    src: string;
    href: string;
}

const FooterCards = (props: Props) => {

    return(
        <div className={styles.container}>
            <Link href={props.href} target='_blank'>
                <Image src={props.src} alt='image' width={45} height={32} />
            </Link>
        </div>
    )
}


export default FooterCards;