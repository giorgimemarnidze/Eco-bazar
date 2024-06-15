import styles from './PriceCalculator.module.scss';
import Image from 'next/image';
import PriceScroll from './PriceScroll/PriceScroll';


const PriceCalculator = () => {

    return(
        <div className={styles.container}>
            <div className={styles.Header}>
                <span>Price</span>
                <span><Image src={'./arr-up.svg'} alt='image' width={15} height={15} /></span>
            </div>

            <PriceScroll />

            <p>
                price: <span>50 - 1,500</span>
            </p>
        </div>
    )
}


export default PriceCalculator;