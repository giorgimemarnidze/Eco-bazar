import styles from './DescribeFoot.module.scss';

type Props = {
    category: string;
    categoryResponse: string;
}

const DescribeFoot = (props: Props) => {

    return(
        <div className={styles.container}>
            <div><span>{props.category}</span><p>{props.categoryResponse}</p></div>
        </div>
    )
}

export default DescribeFoot;