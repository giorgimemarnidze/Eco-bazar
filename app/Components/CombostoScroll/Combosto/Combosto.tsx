import CombostoScroll from '../CombostoScroll';
import styles from './Combosto.module.scss';
import Image from 'next/image';


const Combosto = () => {

    return(
        <div className={styles.container}>
            <CombostoScroll />
            <Image src={'./bigcombosto.svg'} alt='image' width={555} height={555} className={styles.img} />
        </div>
    )
}

export default Combosto;