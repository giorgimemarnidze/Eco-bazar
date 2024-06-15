import styles from './Time.module.scss';


export const Time = () => {

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <span>01</span>
                <span>DAYS</span>
            </div>

            <div>:</div>

            <div className={styles.item}>
                <span>23</span>
                <span>Hours</span>
            </div>

            <div>:</div>

            <div className={styles.item}>
                <span>34</span>
                <span>Mins</span>
            </div>

            <div>:</div>

            <div className={styles.item}>
                <span>57</span>
                <span>Secs</span>
            </div>
        </div>
    )
}


