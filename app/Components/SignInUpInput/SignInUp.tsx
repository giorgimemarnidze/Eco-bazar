import styles from './SignInUp.module.scss';
import Image from 'next/image';

type Props = {
    text: string;
    icon?: string;
}


const SignInUp = (props: Props) => {


    return(
        <div className={styles.container}>
            <input type="text" placeholder={props.text} className={styles.input} required />

            {props.icon && <Image src={props.icon} className={styles.icon} alt='image' width={20} height={20} />}
        </div>
    )
}

export default SignInUp;