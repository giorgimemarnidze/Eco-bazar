import styles from './HeaderBackItem.module.scss';
import Image from 'next/image';

type Props = {
    text: string;
    color?: string;
}

const HeaderBackItem = (props: Props) => {

    const color = props.color ==='green' ? '#00B207' : '#999999';

    return(
        <div className={styles.container}>
            <Image src={'./arr-right-menu.svg'} alt='image' width={20} height={20} />
            <span style={{color}}>
                {props.text}
            </span>
        </div>
    )
}

export default HeaderBackItem;