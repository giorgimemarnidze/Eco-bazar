import styles from './Products.module.scss';
import Image from 'next/image';
import ProductItem from './ProductItem/ProductItem';
import Button from '../Button/Button';


const Products = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2>
                    Popular Products
                </h2>
                <Button />
            </div>

            <div className={styles.pro}>
                <ProductItem src={'/apple.svg'}
                    title='Green Apple'
                    price='$14.99'
                    overlined='20.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green' hover={''} />

                <ProductItem src={'/orange.svg'}
                    title='Fresh Indian Malta'
                    price='$20.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green' hover={''} />

                <ProductItem src={'/yabayi.svg'}
                    title='Chinese cabbage'
                    price='$12.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    coloured='green'
                    border='green'
                    hover='select'

                />
                <ProductItem src={'/luttece.svg'}
                    title='Green Lettuce'
                    price='$9.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green' hover={''} />

                <ProductItem src={'/eggplant.svg'}
                    title='Eggplant'
                    price='$34.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green' hover={''} />

                <ProductItem src={'/potato.svg'}
                    title='Big Potatoes'
                    price='$20.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green' hover={''} />

                <ProductItem src={'/corn.svg'}
                    title='Corn'
                    price='$20.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green' hover={''} />

                <ProductItem src={'/yvavilovani.svg'}
                    title='Fresh Cauliflower'
                    price='$12.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green' hover={''} />

                <ProductItem src={'/bulgaruli.svg'}
                    title='Green Apple'
                    price='$9.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green' hover={''} />
                    
                <ProductItem src={'/wiwaka.svg'}
                    title='Green Chili'
                    price='$14.99'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green' hover={''} />
            </div>

        </div>

    )
}

export default Products;