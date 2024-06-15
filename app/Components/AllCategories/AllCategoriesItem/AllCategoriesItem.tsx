import styles from './AllCategoriesItem.module.scss';
import Image from 'next/image';

type Props = {
    text1: string;
    text2?: string;
}


const AllCategoriesItem = (props: Props) => {
    
    return(
        <div className={styles.container}>
            <input type="radio" />
            {props.text1}
            <span>{props.text2}</span>
        </div>
    )
}


export default AllCategoriesItem;