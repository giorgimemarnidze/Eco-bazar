import NavigationItem from '../NavigationItem/NavigationItem'
import styles from './Navigation.module.scss'
import Link from 'next/link'


export default () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.selected}>
                    <div className={styles.grn}></div>
                    <NavigationItem icon={"dash.svg"} title={"Dashboard"} color={'#666666'} />
                </div>
                <Link href={'/Page10'}>
                    <NavigationItem icon={"order.svg"} title={"Order History"} color={'#666666'} />
                </Link>
                <NavigationItem icon={"gulisvg.svg"} title={"Wishlist"} color={'#666666'} />
                <NavigationItem icon={"ppp.svg"} title={"Shopping Cart"} color={'#666666'} />
                <NavigationItem icon={"set.svg"} title={"Settings"} color={'#666666'} />
                <NavigationItem icon={"out.svg"} title={"Log-Out"} color={'#666666'} />
            </div>
        </div>
    )
}