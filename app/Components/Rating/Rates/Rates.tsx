import styles from './Rates.module.scss';
import Image from 'next/image';

type Props = {
    src: string;
    text: string;
}

const Rates = (props: Props) => {

    return( 
        <div className={styles.container}>
            <input type="checkbox" />
            <Image src={props.src} alt='image' width={80} height={30} />
            {props.text}
        </div>
    )
}


export default Rates;