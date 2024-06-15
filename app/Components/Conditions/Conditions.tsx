import ConditionItem from './ConditionItem/ConditionItem';
import styles from './Conditions.module.scss';

const Conditions = () => {
    const arr = [
        {
            src: '/delivery-truck1.svg',
            title: 'Free Shipping',
            text: 'Free Shipping all your order'
        },
        {
            src: '/headphones1.svg',
            title: 'Customer Support 24/7',
            text: 'Instant access to Support'
        },
        {
            src: '/grn.svg',
            title: '100% Secure Payment',
            text: 'We ensure your money is save'
        },
        {
            src: '/package.svg',
            title: 'Money-Back Guarantee',
            text: '30 Days Money-Back Guarantee'
        },
    ]
    
    return(
        <div className={styles.container}>
            {arr.map((item) => <ConditionItem src={item.src} title={item.title} text={item.text}  />)}
        </div>
    )
}

export default Conditions;