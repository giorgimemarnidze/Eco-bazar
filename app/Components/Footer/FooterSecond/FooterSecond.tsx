import styles from './FooterSecond.module.scss';



const FooterSecond = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <p>My Account</p>
                <div className={styles.text}>
                    <span>My Account</span>
                    <span>Order History</span>
                    <span>Shoping Cart</span>
                    <span>Whishlist</span>
                </div>
            </div>

            <div className={styles.container}>
                <p>Helps</p>
                <div className={styles.text}>
                    <span>Contact</span>
                    <span>Faqs</span>
                    <span>Terms & Condition</span>
                    <span>Privacy Policy</span>
                </div>
            </div>

            <div className={styles.container}>
                <p>Proxy</p>
                <div className={styles.text}>
                    <span>About</span>
                    <span>Shop</span>
                    <span>Product</span>
                    <span>Whishlist</span>
                </div>
            </div>

            <div className={styles.container}>
                <p>Categories</p>
                <div className={styles.text}>
                    <span>Fruit & Vegetables</span>
                    <span>Meat & Fish</span>
                    <span>Bread & Bakery</span>
                    <span>Beauty & Health</span>
                </div>
            </div>
        </div>
    )
}


export default FooterSecond;