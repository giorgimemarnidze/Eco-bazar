'use client';
import Navigation from '../Page9/Navigation/Navigation';
import OrderHistory from './OrderHistory/OrderHistory';
import Page10Navigation from './Page10Navigation/Page10Navigation';
import styles from './page.module.scss';




export default () => {

    return(
        <div className={styles.wrapper}>
            <Page10Navigation />
            <OrderHistory />
        </div>
    )
}