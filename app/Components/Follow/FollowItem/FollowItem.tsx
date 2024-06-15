import styles from './FollowItem.module.scss';
import Image from 'next/image';

type Props = {
    src: string;
    width: number;
    height: number;
}

const FollowItem = (props: Props) => {

    return(
        <div className={styles.container}>
            <Image src={props.src} alt='image' width={props.width} height={props.height} className={styles.img}  />
        </div>
    )
}


export default FollowItem;