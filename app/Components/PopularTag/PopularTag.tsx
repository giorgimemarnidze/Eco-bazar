import styles from './PopularTag.module.scss';
import Image from 'next/image';
import TagItem from './TagItem/TagItem';



const PopularTag = () => {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Popular Tag</span>
                <Image src={'./arr-up.svg'} alt='image' width={15} height={15} />
            </div>

            <div className={styles.wrapper}>
            <TagItem text='Healthy' color={''} backgroundColor={''} />
            <TagItem text='Low fat' color={''} backgroundColor={'green'} />
            <TagItem text='Vegetarian' color={''} backgroundColor={''} />
            <TagItem text='Kid foods' color={''} backgroundColor={''} />
            <TagItem text='Vitamins' color={''} backgroundColor={''} />
            <TagItem text='Bread' color={''} backgroundColor={''} />
            <TagItem text='Meat' color={''} backgroundColor={''} />
            <TagItem text='Snacks' color={''} backgroundColor={''} />
            <TagItem text='Tiffin' color={''} backgroundColor={''} />
            <TagItem text='Launch' color={''} backgroundColor={''} />
            <TagItem text='Dinner' color={''} backgroundColor={''} />
            <TagItem text='Breackfast' color={''} backgroundColor={''} />
            </div>
        </div>
    )
}


export default PopularTag;