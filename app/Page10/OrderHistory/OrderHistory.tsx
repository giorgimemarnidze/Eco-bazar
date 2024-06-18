import TableItem from '@/app/Page9/TableItem/TableItem';
import styles from './OrderHistory.module.scss';


export default () => {

    return (
        <table className={styles.container}>
            <h3>Order History</h3>
            <div className={styles.background}>
                <tr className={styles.head}>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                </tr>
            </div>
            <TableItem id={'#3933'} date={'4 April, 2021'} total={'$135.00 (5 Products)'} status={'Processing'} />
            <TableItem id={'#5045'} date={'27 Mar, 2021'} total={'$25.00 (1 Product)'} status={'on the way'} />
            <TableItem id={'#5028'} date={'20 Mar, 2021'} total={'$250.00 (4 Products)'} status={'Completed'} />
            <TableItem id={'#4600'} date={'19 Mar, 2021'} total={'$35.00 (1 Products)'} status={'Completed'} />
            <TableItem id={'#4152'} date={'18 Mar, 2021'} total={'$578.00 (13 Products)'} status={'Completed'} />
            <TableItem id={'#8811'} date={'10 Mar, 2021'} total={'$345.00 (7 Products)'} status={'Completed'} />
            <TableItem id={'#3536'} date={'5 Mar, 2021'} total={'$560.00 (2 Products)'} status={'Completed'} />
            <TableItem id={'#1374'} date={'27 Feb, 2021'} total={'$560.00 (2 Products)'} status={'Completed'} />
            <TableItem id={'#7791'} date={'25 Feb, 2021'} total={'$560.00 (2 Products)'} status={'Completed'} />
            <TableItem id={'#4846'} date={'24 Feb, 2021'} total={'$23.00 (1 Products)'} status={'Completed'} />
            <TableItem id={'#5948'} date={'20 Feb, 2021'} total={'$23.00 (1 Products)'} status={'Completed'} />
            <TableItem id={'#1577'} date={'12 Oct, 2020'} total={'$23.00 (1 Products)'} status={'Completed'} />
        </table>
    )
}