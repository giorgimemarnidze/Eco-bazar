import styles from './TableItem.module.scss';

interface Props {
    id: string;
    date: string;
    total: string;
    status: string;
}


export default (props: Props) => {


    return(
        <tr className={styles.container}>
            <td>
                {props.id}
            </td>
            <td>
                {props.date}
            </td>
            <td>
                {props.total}
            </td>
            <td>
                {props.status}
            </td>
            <td className={styles.details}>
                View Details
            </td>
        </tr>
    )
}

