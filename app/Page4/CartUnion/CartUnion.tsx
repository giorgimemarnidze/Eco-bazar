import Cart from '../Cart/Cart';
import CartTotal from '../CartTotal/CartTotal';
import styles from './CartUnion.module.scss';

const CartUnion = () => {

    return(
        <div className={styles.wrapper}>
            <h2>My Shopping Cart</h2>
            <div className={styles.container}>
            <Cart />
            <CartTotal />
            </div>
        </div>
    )
}


export default CartUnion;