import Image from "next/image";
import styles from './Banner.module.scss'

const Banner = () => {

    return(
        <Image src={'./banner.svg'} alt="image" width={312} height={295} className={styles.img}  />
    )
}

export default Banner;