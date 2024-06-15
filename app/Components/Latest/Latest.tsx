import styles from './Latest.module.scss';
import LatestImg from './LatestImg/LatestImg';
import Three from './Three/Three';
import Text from './Text/Text';
import Button from '../Button/Button';
import ReadBtn from '../ReadBtn/ReadBtn';

const Latest = () => {

    return (
        <div className={styles.wrapper}>
            <h2>Latest News</h2>


            <div className={styles.union}>
                <div className={styles.products}>
                    <LatestImg src={'dachrilifortoxali.svg'} />
                    <div className={styles.describe}>
                        <div className={styles.three}>
                            <Three src={'/tag.svg'} product='Food' />
                            <Three src={'/user.svg'} product='By Admin' />
                            <Three src={'/comments.svg'} product='65 Comments' />
                        </div>
                        <Text text='Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.' color='green' />
                        <ReadBtn src={'./arr-right.svg'} text='Read More' width={15} height={12} />
                    </div>
                </div>

                <div className={styles.products}>
                    <LatestImg src={'egg.svg'} />
                    <div className={styles.describe}>
                        <div className={styles.three}>
                            <Three src={'/tag.svg'} product='Food' />
                            <Three src={'/user.svg'} product='By Admin' />
                            <Three src={'/comments.svg'} product='65 Comments' />
                        </div>
                        <Text text='Eget lobortis lorem lacinia. Vivamus pharetra semper,' />
                        <ReadBtn src={'./arr-right.svg'} text='Read More' width={15} height={12} />
                    </div>
                </div>

                <div className={styles.products}>
                    <LatestImg src={'salad.svg'} />
                    <div className={styles.describe}>
                        <div className={styles.three}>
                            <Three src={'/tag.svg'} product='Food' />
                            <Three src={'/user.svg'} product='By Admin' />
                            <Three src={'/comments.svg'} product='65 Comments' />
                        </div>
                        <Text text='Maecenas blandit risus elementum mauris malesuada.' />
                        <ReadBtn src={'./arr-right.svg'} text='Read More' width={15} height={12} />
                    </div>
                </div>
            </div>



        </div>
    )
}


export default Latest;