import styles from './Information.module.scss';
import Image from 'next/image';



const Information = () => {

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src={'./green-loc.svg'} alt='image' width={51} height={51} />
                <span>
                    2715 Ash Dr. San Jose, South Dakota 83475
                </span>
            </div>

            <div className={styles.item}>
                <Image src={'./mail.svg'} alt='image' width={51} height={51} />
                <span>
                    Proxy@gmail.com
                    Help.proxy@gmail.com
                </span>
            </div>

            <div className={styles.item2}>
                <Image src={'./greencall.svg'} alt='image' width={51} height={51} />
                <span>
                    (219) 555-0114 <br />
                    (164) 333-0487
                </span>
            </div>
        </div>
    )
}

export default Information;