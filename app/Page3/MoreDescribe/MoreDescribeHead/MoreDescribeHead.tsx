import styles from './MoreDescribeHead.module.scss';
import Link from 'next/link';

type Props = {
    title: string;
    clicked: boolean;
}

const MoreDescribeHead = (props: Props) => {

    return(
        <div className={styles.container}>
            <Link href={''} className={styles.link}>{props.title}</Link>
        </div>
    )
}


export default MoreDescribeHead;