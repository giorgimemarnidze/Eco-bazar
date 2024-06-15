import Link from 'next/link';
import styles from './CartTotal.module.scss';



const CartTotal = () => {

    return (
        <div className={styles.container}>
            <h3>Cart Total</h3>

            <div className={styles.a}>
                <span>Subtotal:</span>
                <span>$84.00</span>
            </div>

            <div className={styles.b}>
                <span>Shipping:</span>
                <span className={styles.free}>Free</span>
            </div>

            <div className={styles.c}>
                <span>Total:</span>
                <span>$84.00</span>
            </div>

            <Link href={'Page5'}>
                <button className={styles.btn}>Proceed to ckeckout</button>
            </Link>
        </div>
    )
}

export default CartTotal;