'use client';

import styles from './page.module.scss'
import NavigationItem from "./NavigationItem/NavigationItem";
import Navigation from './Navigation/Navigation';
import User from './User/User';
import Table from './Table/Table';

export default () => {

    return (
        <div className={styles.container}>
            <Navigation />
            <div className={styles.wrapper}>
                <User />
                <Table />
            </div>
        </div>
    )
}