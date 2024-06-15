import styles from './AllCategories.module.scss';
import AllCategoriesItem from './AllCategoriesItem/AllCategoriesItem';
import Image from 'next/image';


const AllCategories = () => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>All Categories</span>
                <span>
                    <Image src={'arr-up.svg'} alt='image' width={15} height={15} />
                </span>
            </div>
            <AllCategoriesItem text1={'Fresh Fruit (25)'} text2={'(134)'} />
            <AllCategoriesItem text1={'Vegetables (150)'} />
            <AllCategoriesItem text1={'Cooking (54)'} />
            <AllCategoriesItem text1={'Snacks (47)'} />
            <AllCategoriesItem text1={'Beverages (43)'} />
            <AllCategoriesItem text1={'Beauty & Health (38)'} />
            <AllCategoriesItem text1={'Bread & Bakery (15)'} />
        </div>
    )
}


export default AllCategories;