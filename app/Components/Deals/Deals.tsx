import styles from './Deals.module.scss';
import Image from 'next/image';
import Tvali from './Tvali/Tvali';
import { Text } from './Text/Text';
import ProductItem from '../Products/ProductItem/ProductItem';
import Button from '../Button/Button';


export const Deals = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Image src={'./bigapple.svg'} alt='image' width={525} height={445} className={styles.bigapple} />
                <div className={styles.text}>
                    <Tvali />
                    <Text />
                </div>
            </div>

            <div className={styles.down}>
                <ProductItem src='yabayi.svg'
                    price='$12.00'
                    title='Chinese cabbage'
                    img='/Cart.svg'
                    img2='Rating.svg'
                />

                <ProductItem src='luttece.svg'
                    price='$9.00'
                    title='Green Lettuce'
                    img='/Cart.svg'
                    img2='Rating.svg'
                />

                <ProductItem src='eggplant.svg'
                    price='$34.00'
                    title='Eggplant'
                    img='/Cart.svg'
                    img2='Rating.svg'
                />

                <ProductItem src='yvavilovani.svg'
                    price='$12.00'
                    title='Fresh Cauliflower'
                    img='/Cart.svg'
                    img2='Rating.svg'
                />

                <ProductItem src='bulgaruli.svg'
                    price='$9.00'
                    title='Green Capsicum'
                    img='/Cart.svg'
                    img2='Rating.svg'
                />

                <ProductItem src='wiwaka.svg'
                    price='$34.00'
                    title='Green Chili'
                    img='/Cart.svg'
                    img2='Rating.svg'
                />
                
            </div>
            
        </div>
    )
}

