import styles from './Customer.module.scss';
import Image from 'next/image';

type Props = {
    src: string;
    width: number;
    height: number;
    title: string;
    position: string;
}

const Customer = (props: Props) => {

    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src={props.src} alt='image' width={props.width} height={props.height} className={styles.image} />
            </div>

            <div>
                <span>{props.title}</span>
                <span>{props.position}</span>
            </div>
        </div>
    )
}


export default Customer;