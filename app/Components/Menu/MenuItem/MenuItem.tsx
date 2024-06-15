import Link from 'next/link';
import styles from './MenuItem.module.scss';
import Image from 'next/image';

type Props = {
    title: string;
    colored?: string;
    href: string;
}

const MenuItem = (props: Props) => {

    const color = props.colored === 'green' ? 'green' : '#999999' ;

    return(
        <Link href={props.href} className={styles.an} style={{color}}>
            {props.title}
            <Image src={'./arr-down.svg'} alt='image' width={15} height={15} />
        </Link>
    )
}


export default MenuItem;