import Image from "next/image";
import styles from './LongImage.module.scss';


const LongImage = () => {

    return(
        <div className={styles.container}>
            <Image src={'./LongImage.svg'} alt="image" width={1320} height={358} className={styles.long} />
        </div>
    )
}

export default LongImage;