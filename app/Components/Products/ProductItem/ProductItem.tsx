import styles from './ProductItem.module.scss';
import Image from 'next/image';

type Props = {
    src: string;
    title: string;
    price: string;
    overlined?: string;
    img: string;
    img2: string
    coloured?: string;
    border?: string;
    hover?: string;
}

const ProductItem = (props: Props) => {
    
    const font = props.coloured === 'green' ? '#2C742F' : '#4D4D4D';
    const border = props.border === 'green' ? styles.greenBorder : styles.grayBorder;

    return (
        <div className={`${styles.container} ${styles.border} ${border}`}>
            <Image src={props.src} alt='image' width={255} height={230} />
            <div className={styles.inside}>
                <div>
                    <span style={{color:font}} className={styles.title}>{props.title}</span><br />
                    <span className={styles.price}>{props.price} <span className={styles.overlined}>{props.overlined}</span></span>
                </div>
                <Image src={props.img} alt='image' width={25} height={25} />
            </div>
            <Image src={props.img2} alt='image' width={75} height={25} className={styles.img2} />
        </div>
    )
}

export default ProductItem;