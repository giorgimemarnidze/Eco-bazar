import HeaderBackItem from "./HeaderBackItem/HeaderBackItem";
import Image from "next/image";
import styles from './HeaderBackground.module.scss';


const HeaderBackground = () => {

    return(
        <div className={styles.container}>
            <Image src={'./home-icon.svg'} alt="image" width={20} height={20} />
            <HeaderBackItem text={"Categories"} />
            <HeaderBackItem text={'Vegetables'} color="green" />
        </div>
    )
}


export default HeaderBackground;