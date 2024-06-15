import styles from './DescribeBody.module.scss';
import Image from 'next/image';




const DescribeBody = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <span>Brand: </span>
                    <Image src={'./fotoli-back.svg'} alt='image' width={55} height={55} />
                </div>

                <div className={styles.middle}>
                    <span>Share item:</span>
                    <Image src={'./pinterest-eco.svg'} alt='image' width={20} height={20} className={styles.hov} />
                    <Image src={'./twitter-eco.svg'} alt='image' width={20} height={20} className={styles.hov} />
                    <Image src={'./instagram-eco.svg'} alt='image' width={20} height={20} className={styles.hov} />
                </div>
            </div>

            <p>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
            </p>
        </div>
    )
}

export default DescribeBody;