import { limitState, sortState } from "@/app/States"
import { useRecoilState } from "recoil"
import styles from './Filters.module.scss'


export default () => {
    const [sort, setSort] = useRecoilState(sortState);
    const [limit, setLimit] = useRecoilState(limitState);

    const sorting = (e) => {
        setSort(e.target.value)
    }

    const limiting = (e) => {
        setLimit(e.target.value)
    }

    const classes = [styles.container]
    

    return(
        <div className={classes.join(' ').trim()}>
            <select onChange={sorting} value={sort} className={styles.select}>
                <option>asc</option>
                <option>desc</option>
            </select>

            <input type="number" onChange={limiting} value={limit} className={styles.input} />
        </div>
    )
}