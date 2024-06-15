import styles from './ReadBtn.module.scss';
import Image from 'next/image';


type Props = {
    text: string;
    src: string;
    width: number;
    height: number;
}


const ReadBtn = (props: Props) => {

    return(
        <button className={styles.container}>
            {props.text}
            <Image src={props.src} alt='image' width={props.width} height={props.height}  />
        </button>
    )
}



export default ReadBtn;











