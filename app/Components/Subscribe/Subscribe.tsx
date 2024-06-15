
import Media from '../SocialMedia/media';
import SubscribeInput from '../SubscribeInput/SubscribeInput';
import styles from './Subscribe.module.scss';
import Image from 'next/image';


const Subscribe = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>Subcribe our Newsletter</h2>
                    <p>
                        Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
                    </p>
                </div>
                <SubscribeInput />
                <Media />
            </div>
        </div>
    )
}


export default Subscribe;