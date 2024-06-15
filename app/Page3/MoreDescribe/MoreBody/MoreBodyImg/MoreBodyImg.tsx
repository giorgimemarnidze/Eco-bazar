import styles from './MoreBodyImg.module.scss';
import Image from 'next/image';

type Props = {
    text: string;
    text2: string;
    src: string;
}

const MoreBodyImg = (props: Props) => {

    return(
        <div className={styles.container}>
            <Image src={'./video.svg'} alt='image' width={535} height={300} className={styles.video} />
            <div className={styles.wrapper}>
                <Image src={props.src} alt='image' width={32} height={32} />
                <div className={styles.spans}>
                    <span>{props.text}</span>
                    <span>{props.text2}</span>
                </div>
            </div>
        </div>
    )
}


export default MoreBodyImg;