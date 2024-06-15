'use client';

import HeaderDown from '../Components/Header/HeaderDown';
import Menu from '../Components/Menu/Menu';
import InputWrapper from './InputWrapper/InputWrapper';
import OrderSummary from './OrderSummary/OrderSummary';
import styles from './page.module.scss'
import Image from 'next/image';

export default () => {

    return (
        <div className={styles.wrapper}>

            <div className={styles.section}>
                <InputWrapper />
                <OrderSummary />
            </div>
        </div>
    )
}


