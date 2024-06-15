'use client';
import Combosto from '../Components/CombostoScroll/Combosto/Combosto';
import HeaderDown from '../Components/Header/HeaderDown';
import Menu from '../Components/Menu/Menu';
import ProductItem from '../Components/Products/ProductItem/ProductItem';
import MoreBody from './MoreDescribe/MoreBody/MoreBody';
import MoreDescribe from './MoreDescribe/MoreDescribe';
import Describe from './describe/Describe';
import styles from './page.module.scss';
import Image from 'next/image';


export default () => {

    return (
        <div className={styles.wrapper}>
            <Describe />
            <MoreDescribe />
            <MoreBody />
            <div className={styles.pro}>
                <ProductItem src={'./pomidori.svg'} title={'Tomato'} price={'$15.00'} img={'./cart.svg'} img2={'./Rating.svg'} />
                <ProductItem src={'./yvavilovani.svg'} title={'Chanise Cabbage'} price={'$17.00'} img={'./cart.svg'} img2={'./Rating.svg'} />
                <ProductItem src={'./bulgaruli.svg'} title={'Green Capsicum'} price={'$15.00'} img={'./cart.svg'} img2={'./Rating.svg'} />
                <ProductItem src={'./eggplant.svg'} title={'Eggplant'} price={'$12.00'} img={'./cart.svg'} img2={'./Rating.svg'} />
            </div>
        </div>
    )
}
