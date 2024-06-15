import styles from './Text.module.scss';
import Image from 'next/image';
import { Time } from '../Time/Time';


export const Text = () => {

    return(
        <div className={styles.container}>
            <h3>Chinese cabbage</h3>
            <p>
                <span>$12.00</span>
                <span>$24.00</span>
            </p>
            <Image src={'./Rating.svg'} width={60} height={20} alt='image' />
            <p className={styles.offer}>Hurry up offer ends in:</p>

            <Time />
        </div>
    )
}


