import styles from './Article2.module.scss';
import Image from 'next/image';


const Article2 = () => {

    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <span>Best Deal</span>
                <p>
                Special Products Deal of the Month
                </p>
                <button>
                    Shop Now
                    <Image src={'./arr-right.svg'} alt='image' width={20} height={20} />
                </button>
            </div>
            <Image src={'./fotlebi.svg'} alt='image' width={423} height={288} className={styles.imgleaf} />
        </div>
    )
}

export default Article2;