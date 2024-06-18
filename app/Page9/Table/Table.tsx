import Link from 'next/link';
import styles from './Table.module.scss';
import TableItem from '../TableItem/TableItem';
import TableHead from '../TableHead/TableHead';


export default () => {

    return(
        <table className={styles.container}>
            <div className={styles.container__header}>
                <h3>Recent Order History</h3>
                <a href="">View All</a>
            </div>
            <TableHead orderId={'ORDER ID'} headDate={'DATE'} headTotal={'TOTAL'} headStatus={'STATUS'} />
            <TableItem id={'#738'} date={'8 Sep, 2020'} total={'$135.00 (5 Products)'} status={'Processing'} />
            <TableItem id={'#738'} date={'8 Sep, 2020'} total={'$135.00 (5 Products)'} status={'Processing'} />
            <TableItem id={'#738'} date={'8 Sep, 2020'} total={'$135.00 (5 Products)'} status={'Processing'} />
            <TableItem id={'#738'} date={'8 Sep, 2020'} total={'$135.00 (5 Products)'} status={'Processing'} />
            <TableItem id={'#738'} date={'8 Sep, 2020'} total={'$135.00 (5 Products)'} status={'Processing'} />
            <TableItem id={'#738'} date={'8 Sep, 2020'} total={'$135.00 (5 Products)'} status={'Processing'} />
        </table>
    )
}