import styles from './DynamicPage.module.scss';
import Image from 'next/image';


type Props = {
    src: string;
    width: number;
    height: number;
}

const Dynamic = (props: Props) => {

    return (
        <div className={`${styles.container} ${styles.backgroundWhite}`} >
            <Image src={props.src} alt='image' width={props.width} height={props.height} className={styles.img} />
        </div>
    )
}


export default Dynamic;