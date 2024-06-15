import PlusMinus from '@/app/Page3/describe/PlusMinus/PlusMinus';
import styles from './Cart.module.scss';
import Image from 'next/image';




const Cart = () => {

    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span>PRODUCT</span>
                <span>PRICE</span>
                <span>QUANTITY</span>
                <span>SUBTOTAL</span>
            </div>

            <div className={styles.line}>
                <div className={styles.head}>
                    <Image src={'./bulgaruli.svg'} alt='image' width={100} height={100} />
                    <span>Green Capsicum</span>
                </div>
                
                <span>$14.00</span>

                <div className={styles.plus}>
                    <span>-</span>
                    5
                    <span>+</span>
                </div>
                

                <span>$70.00</span>
                <span className={styles.x}>X</span>
            </div>

            <div className={styles.line}>
                <div className={styles.head} style={{paddingLeft: '10px'}}>
                    <Image src={'./witelibulgaruli.svg'} alt='image' width={100} height={100} />
                    <span>Red Capsicum</span>
                </div>
                
                <span>$14.00</span>

                <div className={styles.plus}>
                    <span>-</span>
                    5
                    <span>+</span>
                </div>
                

                <span>$70.00</span>
                <span className={styles.x}>X</span>
            </div>

            <div className={styles.footer}>
                <button className={styles.btn}>
                    Return to shop 
                </button>
                <button className={styles.btn}>
                    Update Cart
                </button>
            </div>

            <div className={styles.apply}>
                <span>Coupon Code</span>

                <div className={styles.inputWrap}>
                    <input type="text" placeholder='Enter code' />
                    <button>Apply Coupon</button>
                </div>
            </div>
        </div>      
    )
}

export default Cart;