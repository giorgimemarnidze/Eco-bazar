import styles from './NavigationItem.module.scss';
import Image from 'next/image';

interface Props {
    icon: string;
    title: string;
    backgroundColor?: string; 
    color: '#666666' | '#1A1A1A'
}

export default (props: Props) => {
    const classes = [styles.container]
    if(props.color) classes.push(styles.color)

    return(
        <div className={classes.join(' ').trim()}>
            <Image src={props.icon} alt='image' width={24} height={24} />
            {props.title}
        </div>
    )
}