import styles from './Testimonials.module.scss';
import Dynamic from './DynamicPage/DynamicPage';
import Image from 'next/image';
import Text from './Text/Text';
import Customer from './Customer/Customer';

const Testimonials = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2>Client Testimonials</h2>
                <div className={styles.dinamic}>
                    <Dynamic src={'/arrow-left-black.svg'} width={15} height={15} />
                    <Dynamic src={'/arr-right.svg'} width={15} height={15} />
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.item}>
                    <Image src={'/apostrofi.svg'} alt='image' width={35} height={35} />
                    <Text text='Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet
                     elit eu magna dictum, bibendum cursus velit sodales.
                      Donec sed neque eget'
                    />
                    <div className={styles.footer}>
                        <Customer src={'/first-customer.svg'} width={56} height={56} title='Robert Fox' position='Customer' />
                        <Image src={'./fiverate.svg'} width={75} height={20} alt='image' />
                    </div>
                </div>

                <div className={styles.item}>
                    <Image src={'/apostrofi.svg'} alt='image' width={35} height={35} />
                    <Text text='Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet
                     elit eu magna dictum, bibendum cursus velit sodales.
                      Donec sed neque eget'
                    />
                    <div className={styles.footer}>
                        <Customer src={'/seconduser.svg'} width={56} height={56} title='Dianne Russell' position='Customer' />
                        <Image src={'./fiverate.svg'} width={75} height={20} alt='image' />
                    </div>
                </div>

                <div className={styles.item}>
                    <Image src={'/apostrofi.svg'} alt='image' width={35} height={35} />
                    <Text text='Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet
                     elit eu magna dictum, bibendum cursus velit sodales.
                      Donec sed neque eget'
                    />
                    <div className={styles.footer}>
                        <Customer src={'/thirduser.svg'} width={56} height={56} title='Eleanor Pena' position='Customer' />
                        <Image src={'./fiverate.svg'} width={75} height={20} alt='image' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials;