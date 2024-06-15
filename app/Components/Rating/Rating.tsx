import Rates from './Rates/Rates';
import styles from './Rating.module.scss';
import Image from 'next/image';

const Rating = () => {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Rating</span>
                <Image src={'./arr-up.svg'} alt='image' width={15} height={15} />
            </div>

            <div className={styles.stars}>
                <Rates src={'./Rating.svg'} text={'5.0'} />
                <Rates src={'./Rating.svg'} text={' 4.0 & up'} />
                <Rates src={'./Rating.svg'} text={' 3.0 & up'} />
                <Rates src={'./Rating.svg'} text={' 2.0 & up'} />
                <Rates src={'./Rating.svg'} text={' 1.0 & up'} />

            </div>

        </div>
    )
}


export default Rating;