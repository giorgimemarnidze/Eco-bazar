import styles from './MoreBody.module.scss';
import Image from 'next/image';
import MoreBodyImg from './MoreBodyImg/MoreBodyImg';
import BodyText from './BodyText/BodyText';
import ProductItem from '@/app/Components/Products/ProductItem/ProductItem';



const MoreBody = () => {
    
    return(
        <div className={styles.container}>
            <BodyText />
            <MoreBodyImg text={'Save your 64% money with us'} text2={'64% Discount'} src={'mwvanefasoni.svg'} />
        </div>
    )
}


export default MoreBody;