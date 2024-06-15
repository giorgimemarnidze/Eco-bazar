import { deflate } from 'zlib';
import styles from './CardButton.module.scss';
import Image from 'next/image';


const CardButton = () => {

    return(
        <button className={styles.container}>
            <span>Shop Now</span>
            <Image src={'./arr-right.svg'} alt='image' width={17} height={17} />
        </button>
    )
}


export default CardButton;