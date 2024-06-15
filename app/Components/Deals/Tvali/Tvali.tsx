import styles from './Tvali.module.scss';
import Image from 'next/image';
import AddCart from '../../AddCart/AddCart';



const Tvali = () => {

    return(
        <div className={styles.container}>
            <div className={styles.guli}>
                <Image src={'./heart.svg'} alt='iamge' width={20} height={20} />
            </div>
            <AddCart />
            <div className={styles.guli}>
                <Image src={'./tvali.svg'} alt='image' width={20} height={20} />
            </div>
        </div>
    )
}


export default Tvali;