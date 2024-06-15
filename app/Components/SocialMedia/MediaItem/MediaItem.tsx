import styles from './MediaItem.module.scss';
import Image from 'next/image';

type Props = {
    src: string;
    width: number;
    height: number;
    backgroundColor?: string;
}

const MediaItem = (props: Props) => {

    const BackgroundColor = props.backgroundColor === 'colored' ? '#00B207' : '#fff'
    
    return( 
        <div className={styles.container} style={{backgroundColor: BackgroundColor}}>
            <a href="">
                <Image src={props.src} width={props.width} height={props.height} alt='image' />
            </a>
        </div>
    )
}


export default MediaItem;