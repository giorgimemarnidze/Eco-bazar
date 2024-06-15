import styles from './Article1.module.scss';
import Image from 'next/image';


const Article1 = () => {

    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <span>SUMMER SALE</span>
                <span>75% OFF</span>
                <p>Only Fruit & Vegetable</p>
                <button>
                    Shop Now
                    <Image src={'./arr-right.svg'} alt='image' width={20} height={20} />
                </button>
            </div>
            <Image src={'./woman2.svg'} alt='image' width={423} height={288} className={styles.womann} />
        </div>
    )
}

export default Article1;