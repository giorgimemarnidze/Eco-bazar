import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';

type Props = {
    color: string;
}

const Header = (props: Props) => {

    const backgroundColor = props.color === 'colored' ? '#333333' : '#ffffff' 

    return (
        <div className={styles.container}>
            <div style={{backgroundColor}}>
                <Image src={'./loc.svg'} alt='image' width={15} height={15} />
                <p>
                    Store Location: Lincoln- 344, Illinois, Chicago, USA
                </p>
            </div>
            <div>
                <p>
                    <span>Eng <Image src={'./arr-down.svg'} alt='image' width={10} height={10} /></span>
                    <span>USD <Image src={'./arr-down.svg'} alt='image' width={10} height={10} /></span>
                </p>
                <p>
                    <Link href={'SignIn'}>Sign In</Link> / <Link href={'SignUp'}>Sign Up</Link>
                </p>
            </div>
        </div>
    )
}


export default Header;