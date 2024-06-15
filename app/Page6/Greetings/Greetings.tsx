import styles from './Greetings.module.scss';



export default () => {

    return (
        <div className={styles.container}>
            <div className={styles.containerHeader}>
                <h3>Just Say Hello!</h3>
                <p>
                    Do you fancy saying hi to me or you want to get started with your <br /> project and you need my help? Feel free to contact me.
                </p>
            </div>

            <div className={styles.twoInput}>
                    <input type="text" placeholder='Template Cookie' className={styles.input12} />
                    <input type="text" placeholder='zakirsoft@gmail.com' className={styles.input12} />
            </div>
            <input type="text" className={styles.inputBig} value={'Hello'} />
            <input type="text" className={styles.inputBig2} placeholder='Subjects' />
            <button className={styles.btn}>Send Message</button>
        </div>
    )
}