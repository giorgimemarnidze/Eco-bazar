
import Link from 'next/link';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem/MenuItem';
import Image from 'next/image';


type Props = {
    color?: string
}

const Menu = (props: Props) => {

    const color = props.color === 'green' ? '#00B207' : '#666666';
    

    return (
        <div className={styles.container}>
            <div>
                <Image src={'./burgerm.svg'} alt='image' width={38} height={38} />
            </div>

            <div className={`${styles.menuContainer} ${color}`}>
                <MenuItem title='Home' href={'http://localhost:3000/'} />
                <MenuItem title='Shop' href={'/Page2'} />
                <MenuItem title='Pages' href={'Page3'} />
                <MenuItem title='Blog' href={''} />
                <MenuItem title='About Us' href={''} />
                <MenuItem title='Contact Us' href={''} />
            </div>

            <div className={styles.call}>
                <Image src={props.src} alt='image' width={17} height={17} />
                <span>(219) 555-0114</span>
            </div>
        </div>
    )
}

export default Menu;