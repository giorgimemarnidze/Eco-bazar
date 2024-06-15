import styles from './Navigation.module.scss';
import Image from 'next/image';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {

    return(
        <div className={styles.container}>
            <NavigationItem icon={'dashboard-icon.svg'} title={'Dashboard'} />
            <NavigationItem icon={'dashboard-icon.svg'} title={'Dashboard'} />
        </div>
    )
}

export default Navigation;