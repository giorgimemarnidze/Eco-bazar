import styles from './OrderSummary.module.scss';
import Image from 'next/image';
import Link from 'next/link';


const OrderSummary = () => {

    return (
        <div className={styles.container}>
            <h3>Order Summery</h3>

            <div>
                <div className={styles.bulgaruli}>
                    <div className={styles.wrap}>
                        <Image src={'witeli.svg'} alt='image' width={60} height={60} />
                        <span>Red Capsicum x5</span>
                    </div>
                    $70.00
                </div>

                <div className={styles.bulgaruli}>
                    <div className={styles.wrap}>
                        <Image src={'witeli.svg'} alt='image' width={60} height={60} />
                        <span>Red Capsicum x5</span>
                    </div>
                    $70.00
                </div>

                <div className={styles.subtotal}>
                    <span>Subtotal:</span>
                    <span>$84.00</span>
                </div>

                <div className={styles.subtotal}>
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>

                <div className={styles.total}>
                    <span>Total:</span>
                    <span>$84.00</span>
                </div>

                <div className={styles.pay}>
                    <h3>Payment Method</h3>
                    <div className={styles.payItem}>
                        <input type="radio" name='cash' />
                        <label htmlFor="">Cash on Delivery</label>
                    </div>

                    <div className={styles.payItem}>
                        <input type="radio" name='paypal' />
                        <label htmlFor="">Paypal</label>
                    </div>

                    <div className={styles.payItem}>
                        <input type="radio" name='amazon' />
                        <label htmlFor="">Amazon Pay</label>
                    </div>

                    <Link href={'Page6'}>
                        <button className={styles.btn}>Place Order</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default OrderSummary;