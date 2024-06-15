import styles from './Filter.module.scss';
import Image from 'next/image';



const Filter = () => {

    return(
        <button className={styles.container}>
            <span>Filter</span>
            <Image src={'./filter-icon.svg'} alt='image' width={30} height={30} />
        </button>
    )
}

export default Filter;