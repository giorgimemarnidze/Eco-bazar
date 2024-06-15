import styles from './AddCart.module.scss';
import Image from 'next/image'


const AddCart = () => {

    return(
        <button className={styles.container}>
            <span>Add to Cart</span>
            <Image src={'cartbag.svg'} alt='image' width={25} height={15} />
        </button>
    )
}


export default AddCart;