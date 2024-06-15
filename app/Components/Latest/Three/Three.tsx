import styles from './Three.module.scss';
import Image from 'next/image';

type Props = {
    src: string;
    product: string;
}

const Three = (props: Props) => {

    return (
        <div className={styles.container}>
            <Image src={props.src} alt='image' width={20} height={20} />
            <span>{props.product}</span>
        </div>
    )
}

export default Three;