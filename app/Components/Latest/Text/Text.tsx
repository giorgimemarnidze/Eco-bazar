import styles from './Text.module.scss';

type Props = {
    text: string;
    color?: string;
}


const Text = (props: Props) => {

    const color = props.color === 'green' ? '#2C742F' : '#1A1A1A';

    return (
        <p className={styles.paragraph} style={{color}}>
            {props.text}
        </p>
    )
}

export default Text;