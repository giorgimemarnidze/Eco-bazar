import Link from 'next/link';
import styles from './Sponsors.module.scss';
import Image from 'next/image';



const Sponsors = () => {

    return(
        <div className={styles.container}>
            <Link href={'https://google.com'} target='_blank'><Image src={'/steps.svg'} alt='image' width={82} height={32} /> </Link>
            <Link href={"https://shops.mango.com"} target='_blank'><Image src={'/mango.svg'} alt='image' width={82} height={32} /></Link>
            <Link href={"https://food.com"} target='_blank'><Image src={'/food.svg'} alt='image' width={82} height={32} /></Link>
            <Link href={"https://google.com"} target='_blank'><Image src={'/food2.svg'} alt='image' width={82} height={32} /></Link>
            <Link href={"https://Nytimes.com"} target='_blank'><Image src={'/bookoff.svg'} alt='image' width={82} height={32} /></Link>
            <Link href="https://youtube.com" target='_blank'><Image src={'/gseries.svg'} alt='image' width={82} height={32} /></Link>
        </div>
    )
}

export default Sponsors;