import styles from './Categories.module.scss';
import Image from 'next/image';
import Category from './Category/Category';
import Button from '../Button/Button';

const Categories = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2>
                    Popular Categories
                </h2>
                <Button />
            </div>

            <div className={styles.container}>
                <Category text='Fresh Fruits' size='big'>
                    <Image src={'./fruits.svg'} alt='image' width={190} height={130} />
                </Category>

                <Category text='Fresh Vegetables' size='big' favourite='fav'>
                    <Image src={'./vegetable.svg'} alt='image' width={190} height={130} />
                </Category>

                <Category text='Meat & Fish' size='big'>
                    <Image src={'./meat.svg'} alt='image' width={190} height={130} />
                </Category>

                <Category text='Snacks' size='big'>
                    <Image src={'./snack.svg'} alt='image' width={190} height={130} />
                </Category>

                <Category text='Beverages' size='big'>
                    <Image src={'./wvenebi.svg'} alt='image' width={190} height={130} />
                </Category>

                <Category text='Beauty & Health' size='big'>
                    <Image src={'./health.svg'} alt='image' width={190} height={130} />
                </Category>
            </div>

            <div className={styles.container2}>
                <Category text='Bread & Bakery' size='big'>
                    <Image src={'./bakery.svg'} alt='image' width={190} height={130} />
                </Category>

                <Category text='Baking Needs' size='big'>
                    <Image src={'./needs.svg'} alt='image' width={190} height={130} />
                </Category>

                <Category text='Cooking' size='big'>
                    <Image src={'./cooking.svg'} alt='image' width={190} height={130} />
                </Category>

                <Category text='Diabetic Food' size='big'>
                    <Image src={'./diabeticfoods.svg'} alt='image' width={190} height={130} />
                </Category>

                <Category text='Dish Detergents' size='big'>
                    <Image src={'./kitchenclean.svg'} alt='image' width={190} height={130} />
                </Category>

                <Category text='Oil' size='big'>
                    <Image src={'./oil.svg'} alt='image' width={190} height={130} />
                </Category>
            </div>
        </div>
    )
}

export default Categories;