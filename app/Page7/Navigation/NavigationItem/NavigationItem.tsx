import styles from './NavigationItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';


type Props = {
    icon: string;
    title: string;
    active: string;
}

const NavigationItem = (props: Props) => {

    const classes = [styles.container]

    if(props.active)  classes.push(styles.active)
    
    return(
        <Link href={''} className={classes.join(' ').trim()}>
            <div className={styles.gaformeba}></div>
            <div className={styles.littleContainer}>
                <Image src={props.icon} alt='image' width={24} height={24} />
                {props.title}
            </div>
        </Link>
    )
}


export default NavigationItem;