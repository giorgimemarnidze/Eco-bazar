import styles from './CombostoScroll.module.scss';
import Image from 'next/image';

const CombostoScroll = () => {

    return(
        <div className={styles.container}>
            <Image src={'arr-up.svg'} alt='image' width={20} height={20} className={styles.scroll} />

            <div className={styles.products}>
                <div className={styles.item}>
                    <Image src={'./lil-combosto2.svg'} alt='image' width={80} height={90} />
                </div>

                <div className={styles.item}>
                    <Image src={'./lil-combosto2.svg'} alt='image' width={80} height={90} />
                </div>
                
                <div className={styles.item}>
                    <Image src={'./lil-combosto3.svg'} alt='image' width={80} height={90} />
                </div>

                <div className={styles.item}>
                    <Image src={'./lil-combosto4.svg'} alt='image' width={80} height={90} />
                </div>
            </div>

            <Image src={'arr-down1.svg'} alt='image' width={30} height={30} className={styles.scroll} />
        </div>
    )
}


export default CombostoScroll;