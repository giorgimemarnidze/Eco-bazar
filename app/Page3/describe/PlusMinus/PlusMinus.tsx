import styles from './PlusMinus.module.scss';
import Image from 'next/image';



const PlusMinus = () => {

    return(
        <div className={styles.wrapper}>
           <div className={styles.firstContainer}> 
                <div className={styles.item}>-</div>
                <span>5</span>
                <div className={styles.item}>+</div>
           </div>

           <button className={styles.btn}>Add to Cart <Image src={'./whitebag.svg'} width={15} height={15} alt='image' /></button>

           <div className={styles.heart}>
            <Image src={'./heart.svg'} alt='image' width={20} height={20} />
           </div>
        </div>
    )
}

export default PlusMinus;