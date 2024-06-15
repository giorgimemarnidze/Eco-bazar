import styles from './PageSwipeItem.module.scss';

type Props = {
    src?: string;
    item: string;
}

const PageSwipeItem = (props: Props) => {

    return(
        <div className={styles.container}>
            {props.src}
            {props.item}
        </div>
    )
}


export default PageSwipeItem;