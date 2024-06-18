import NavigationItem from "@/app/Page9/NavigationItem/NavigationItem"
import styles from './Page10Navigation.module.scss';
import Link from "next/link";

export default () => {

    return (
        <div className={styles.container}>
            <h3>Navigation</h3>
            <Link href={'/Page9'}>
                <NavigationItem icon={"grayfirst.svg"} title={"Dashboard"} color={"#666666"} />
            </Link>
            <div className={styles.selected}>
                <div className={styles.grn}></div>
                <NavigationItem icon={"blacksecond.svg"} title={"Order History"} color={"#666666"} />
            </div>
            <NavigationItem icon={"whishlist.svg"} title={"Wishlist"} color={"#666666"} />
            <NavigationItem icon={"crt.svg"} title={"Shopping Cart"} color={"#666666"} />
            <NavigationItem icon={"setting.svg"} title={"Settings"} color={"#666666"} />
            <NavigationItem icon={"logout.svg"} title={"Log-out"} color={"#666666"} />
        </div>
    )
}