import styles from './MoreDescribe.module.scss';
import Image from 'next/image';
import MoreDescribeHead from './MoreDescribeHead/MoreDescribeHead';


const MoreDescribe = () => {

    return (
        <div className={styles.container}>
            <div className={styles.sss}>
                <MoreDescribeHead title={'Descriptions'} clicked={false} />
                <div className={styles.selected}></div>
            </div>
            <MoreDescribeHead title={'Additional Information'} clicked={false} />
            <MoreDescribeHead title={'Customer Feedback'} clicked={false} />
        </div>
    )
}


export default MoreDescribe;