'use client';

import HeaderDown from "../Components/Header/HeaderDown";
import Menu from "../Components/Menu/Menu";
import Cart from "./Cart/Cart";
import CartUnion from "./CartUnion/CartUnion";
import styles from './page.module.scss';
import Image from "next/image";

export default () => {

    return (
        <div className={styles.wrapper}>
            <CartUnion />
        </div>
    )
}