'use client';

import Greetings from './Greetings/Greetings';
import Information from './Information/Information';
import styles from './page.module.scss';
import Image from 'next/image';



export default () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Information />
                <Greetings />
            </div>

            <div className={styles.container__map}>
                <iframe  className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423073.96824341995!2d-118.54432316015567!3d34.06271081130064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4YOa4YOd4YOhLeGDkOGDnOGDr-GDlOGDmuGDlOGDoeGDmCwg4YOZ4YOQ4YOa4YOY4YOk4YOd4YOg4YOc4YOY4YOQLCDhg5Dhg5vhg5Thg6Dhg5jhg5nhg5jhg6Eg4YOo4YOU4YOU4YOg4YOX4YOU4YOR4YOj4YOa4YOYIOGDqOGDouGDkOGDouGDlOGDkeGDmA!5e0!3m2!1ska!2sge!4v1717093837545!5m2!1ska!2sge" width="1500" height="450" style={{ border: '0' }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}


