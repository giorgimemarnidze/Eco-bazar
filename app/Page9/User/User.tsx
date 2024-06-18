import Link from 'next/link';
import styles from './User.module.scss';
import Image from 'next/image';

export default () => {

    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image src={'user-img.svg'} alt='image' width={120} height={120} className={styles.img} />
                <h3>Dianne Russell</h3>
                <span>Customer</span>
                <span>Edit Profile</span>
            </div>

            <div className={styles.user__info}>
                <span>Billing Address</span>
                <span>Dainne Russell</span>
                <p>
                    4140 Parker Rd. Allentown, New Mexico 31134
                </p>
                <strong className={styles.strong}>
                    <Link href={'@mailto:dainne.ressell@gmail.com'} target='_blank'>dainne.ressell@gmail.com</Link>
                    <Link href={'tel:(671) 555-0110'}>
                        (671) 555-0110
                    </Link>
                </strong>
                <span>Edit Address</span>
            </div>
        </div>
    )
}