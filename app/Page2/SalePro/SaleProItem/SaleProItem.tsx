import styles from './SaleProItem.module.scss';
import Image from 'next/image';

type Props = {
    src: string;
    body: string;
    gadaxazuli: string;
    head: string;
    color?: string;
    selected? : string;
    no?: string;
}


const SaleProItem = (props: Props) => {

    const color = props.color === 'green' ? '#2C742F' : '#4D4D4D';
    const selected = props.selected === 'select' ? styles.bla : styles.nope;
    return (
        <div className={`${styles.container} ${selected}`}>
            <Image src={props.src} alt='image'
                width={100}
                height={100}
                className={styles.mainimg}
            />

            <div className={styles.text}>
                <p style={{color}}>{props.head}</p>
                <span>{props.body} <span className={styles.gadaxazuli}>{props.gadaxazuli}</span></span>
                <Image src={'./Rating.svg'} alt='image' width={60} height={12} />
            </div>
        </div>
    )
}


export default SaleProItem;