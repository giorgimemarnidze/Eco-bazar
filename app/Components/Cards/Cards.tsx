import styles from './Cards.module.scss';
import Image from 'next/image';
import CardsItem from './CardsItem/CardsItem';


const Cards = () => {

    return (
        <div className={styles.container}>
            <CardsItem src={'./healthycard.svg'}
                header='Best Deals'
                title='Sale of the Month'
                first='00'
                firstcom='DAY'
                second='02'
                secondcom='HOURS'
                third='18'
                thirdcom='MINS'
                fourth='46'
                fourthcom='SECS'
            />

            <CardsItem src={'./healthycard2.svg'}
                header='85% Fat Free'
                title='Low-Fat Meat'
                first='Started at'
                second='$79.99'
                color='orange'
            />

            <CardsItem src={'./healthycard3.svg'}
                header='Summer Sale'
                title='100% Fresh Fruit'
                first='Up to'
                second='64 % OFF'
                color='orange'

            />
        </div>
    )
}


export default Cards;
