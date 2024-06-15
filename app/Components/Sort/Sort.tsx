import styles from './Sort.module.scss';



const Sort = () => {

    return(
        <label htmlFor="Sort by" id='sort' className={styles.wrapper}>
            <span>Sort by:</span>
            <select name="" id="sort" className={styles.option}>
                <option value="">Latest</option>
            </select>
        </label>
    )
}


export default Sort;