import styles from './CardsItem.module.scss';
import Image from 'next/image';
import CardButton from '../CardButton/CardButton';

type Props = {
    img?: string;
    header?: string;
    title?: string;
    time?: string;
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
    src: string;
    firstcom?: string;
    secondcom?: string;
    thirdcom?: string;
    fourthcom?: string;
    color?: string;
}

const CardsItem = (props: Props) => {

    const color = props.color === 'orange' ? '#FF8A00' : '#fff';

    return (
        <div className={styles.container}>
            <Image src={props.src} width={424} height={536} alt='image' />
            <div className={styles.text}>
                <span className={styles.head}>{props.header}</span>
                <h2>{props.title}</h2>

                <div className={styles.timeOut}>
                    <div className={styles.gasworeba}>
                        <div>
                            <span>{props.first}</span>
                            <span>{props.firstcom}</span>
                        </div>
                    </div>

                    <div className={styles.gasworeba}>
                        <div>
                            <span style={{color}}>{props.second}</span>
                            <span>{props.secondcom}</span>
                        </div>
                    </div>
            
                    <div className={styles.gasworeba}>
                        <div>
                            <span>{props.third}</span>
                            <span>{props.thirdcom}</span>
                        </div>
                    </div>
                    
                    <div className={styles.gasworeba}>
                        <div>
                            <span>{props.fourth}</span>
                            <span>{props.firstcom}</span>
                        </div>
                    </div>
                </div>
                <CardButton />
            </div>
            
        </div>
    )
}


export default CardsItem;