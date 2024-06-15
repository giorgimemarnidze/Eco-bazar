import styles from './InputItem.module.scss';

type Props = {
    title: string;
    placeholder: string;
    length?: string;
}

const InputItem = (props: Props) => {

    const length = props.length === 'big' ? '870px' : '280px';

    return(
        <div className={styles.container} style={{maxWidth: length}}>
            <label htmlFor="">{props.title}</label>
            <input type="text" placeholder={props.placeholder} className={styles.input} />
        </div>
    )
}

export default InputItem;