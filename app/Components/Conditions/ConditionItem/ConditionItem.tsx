import styles from './ConditionItem.module.scss'
type Props = {
    src : string;
    title : string;
    text: string
}
const ConditionItem = (props:Props) => {
    return (
        <div className={styles.text}>
                <img src={props.src} alt='image' width={40} height={40} />
                <div className={styles.fonts}>
                    <span>{props.title}</span>
                    <p>{props.text}</p>
                </div>
        </div>
    )
}
export default ConditionItem