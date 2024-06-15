import styles from './FeaturedProduct.module.scss';
import Button from '../Button/Button';
import ProductItem from '../Products/ProductItem/ProductItem';

const FeaturedProduct = () => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Featured Products</h2>
                <Button />
            </div>

            <div className={styles.products}>
                <ProductItem src={'/apple.svg'}
                    title='Green Apple'
                    price='$14.99'
                    overlined='20.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green'
                />

                <ProductItem src={'/orange.svg'}
                    title='Fresh Indian Malta'
                    price='$20.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green'
                />

                <ProductItem src={'/yabayi.svg'}
                    title='Chinese cabbage'
                    price='$12.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green'
                />

                <ProductItem src={'/luttece.svg'}
                    title='Green Lettuce'
                    price='$9.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green'
                />

                <ProductItem src={'/eggplant.svg'}
                    title='Eggplant'
                    price='$34.00'
                    img='/Cart.svg'
                    img2='/Rating.svg'
                    border='green'
                />
            </div>
        </div>
    )
}


export default FeaturedProduct;