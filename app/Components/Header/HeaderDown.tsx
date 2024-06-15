
import styles from './HeaderDown.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const HeaderDown = () => {

    return (
        <div className={styles.container}>
            <Link href={'/Page2'} className={styles.logo}>
                <Image src={'./eco-logo.svg'} alt='image' width={183} height={38} />
            </Link>

            <div className={styles.formss}>
                <input type="search" placeholder='Search' className={styles.inp} />
                <button>Search</button>
            </div>

            <Link href={'/Page8'} className={styles.balance}>
                <Image src={'./heart.svg'} alt='image' width={35} height={35} />
                <p>
                    <span>
                    <Image src={'./cart.svg'} alt='image' width={40} height={40} />
                    </span>
                    <span>Shopping Cart<br />
                    $57.00</span>
                </p>
            </Link>
        </div>

    )
}


export default HeaderDown;
