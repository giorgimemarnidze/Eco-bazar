import styles from './DescribeHeader.module.scss';
import Image from 'next/image';


const DescribeHeader = () => {

    return (
        <div className={styles.container}>
            <div className={styles.headWrapper}>
                <h2>
                    Chinese Cabbage
                </h2>
                <div className={styles.stock}>
                    in stock
                </div>
            </div>

            <div className={styles.body}>
                <Image src={'Rating.svg'} width={60} height={20} alt='image' /> <span>4 Review </span>
                <span>
                    SKU: 2,51,594
                </span>
            </div>

            <div className={styles.foot}>
                <span>$48.00</span>
                <span>$17.28</span>
                <span>64% off</span>
            </div>

        </div>
    )
}

export default DescribeHeader;