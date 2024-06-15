import Combosto from '@/app/Components/CombostoScroll/Combosto/Combosto';
import styles from './Describe.module.scss';
import DescribeBody from './DescribeBody/DescribeBody';
import DescribeHeader from './DescribeHeader/DescribeHeader';
import PlusMinus from './PlusMinus/PlusMinus';
import DescribeFoot from './DescribeFoot/DescribeFoot';
import Link from 'next/link';

const Describe = () => {

    return (
        <div className={styles.wrapper}>
            <Combosto />
            <div className={styles.text}>
                <DescribeHeader />
                <DescribeBody />
                <Link href={'Page4'} className={styles.link}><PlusMinus /></Link>
                <DescribeFoot category={'Category:'} categoryResponse={'Vegetables'} />
                <DescribeFoot category={'Tag:'} categoryResponse={'Vegetables  Healthy  Chinese Cabbage Green Cabbage'} />
            </div>
            
        </div>
    )
}

export default Describe;