import styles from './PriceScroll.module.scss';
import Image from 'next/image';



const PriceScroll = () => {

    return(
        <div className={styles.container}>
            <Image src={'pricegray.svg'} alt='image' width={312} height={18} />
            <div className={styles.inside}>
                <Image src={'pricegreen.svg'} alt='image' width={200} height={6} />
            </div>
        </div>
    )
}



export default PriceScroll;