import styles from './Button.module.scss';
import Image from 'next/image';



const Button = () => {

    return(
        <button className={styles.container}>
           <span>View All</span>
            <Image src={'./arr-right.svg'} alt='image' width={20} height={20} />
        </button>
    )
}

export default Button;