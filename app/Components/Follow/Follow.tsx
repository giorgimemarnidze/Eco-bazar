import styles from './Follow.module.scss';
import Image from 'next/image';
import FollowItem from './FollowItem/FollowItem';



const Follow = () => {
    
    return(
        <div className={styles.wrapper}>
            <h2>Follow us on Instagram</h2>

            <div className={styles.container}>
                <FollowItem src={'./tomato.svg'} width={200} height={200}  />
                <FollowItem src={'./flora.svg'} width={200} height={200}  />
                <FollowItem src={'./flora2.svg'} width={200} height={200}  />
                <FollowItem src={'./flora3.svg'} width={200} height={200}  />
                <FollowItem src={'./flora4.svg'} width={200} height={200}  />
                <FollowItem src={'./flora5.svg'} width={200} height={200}  />
            </div>
        </div>
    )
}


export default Follow;