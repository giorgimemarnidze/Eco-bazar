import FooterCards from './FooterCards/FooterCards';
import styles from './FooterLast.module.scss';


const FooterLast = () => {

    return (

        <div className={styles.container}>
            <p>
                Ecobazar eCommerce © 2021. All Rights Reserved
            </p>

            <div className={styles.cards}>
                <FooterCards src={'applepay-card.svg'} href={'https://apple.com'} />
                <FooterCards src={'visa-card.svg'} href={'https://google.com'} />
                <FooterCards src={'discover-card.svg'} href={'https://apple.com'} />
                <FooterCards src={'mastercard.svg'} href={'https://mastercard.com'} />
                <FooterCards src={'lastcard.svg'} href={'https://google.com'} />
            </div>
        </div>

    )
}

export default FooterLast;