import styles from './Text.module.scss';

type Props = {
    text: string;
}

const Text = (props: Props) => {

    return(
        <p className={styles.container}>
            {props.text}
        </p>
    )
}

export default Text;    