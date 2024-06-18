import styles from './TableHead.module.scss';

interface Props {
    orderId: string;
    headDate: string;
    headTotal: string;
    headStatus: string;
}

export default (props: Props) => {

    return (
        <tr className={styles.container}>
            <th>{props.orderId}</th>
            <th className={styles.fck}>{props.headDate}</th>
            <th>{props.headTotal}</th>
            <th>{props.headStatus}</th>
            <th></th>
        </tr>
    )
}

