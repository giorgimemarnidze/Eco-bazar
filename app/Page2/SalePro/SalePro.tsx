import styles from './SalePro.module.scss';
import Image from 'next/image';
import SaleProItem from './SaleProItem/SaleProItem';


const SalePro = () => {

    return(
        <div className={styles.container}>
            <h3>Sale Product</h3>
            <div>
            <SaleProItem src={'./witelibulgaruli.svg'} body={'$32.00'} gadaxazuli={'$20.99'} head={'Red Capsicum'} selected='no' />
            <SaleProItem src={'./atami.svg'} body={'$24.00'} gadaxazuli={'$20.99'} head={'Chanise Cabbage'} selected='select' />
            <SaleProItem src={'./bulgaruli.svg'} body={'$32.00'} gadaxazuli={'$20.99'} head={'Red Capsicum'} selected='no' />
            </div>
        </div>
    )
}


export default SalePro;