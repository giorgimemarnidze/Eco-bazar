import styles from './SubscribeInput.module.scss';
import Image from 'next/image';


const SubscribeInput = () => {

    return( 
        <div className={styles.container}>
            <input type="search" placeholder='Your email address' />
            <button>Subscribe</button>
        </div>
    )
}


export default SubscribeInput;