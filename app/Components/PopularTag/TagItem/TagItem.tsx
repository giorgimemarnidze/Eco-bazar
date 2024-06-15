import styles from './TagItem.module.scss';

type Props = {
    text: string;
    color: string;
    backgroundColor: string;
}

const TagItem = (props: Props) => {

    const color = props.color === 'white' ? '#fff' : '#1A1A1A';
    const backgroundColor = props.backgroundColor === 'green' ? '#00B207' : '#F2F2F2'

    return(
        <button className={styles.btn} style={{backgroundColor}}>
            {props.text}
        </button>
    )
}


export default TagItem;