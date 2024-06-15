import styles from './BodyText.module.scss';
import Image from 'next/image';


const BodyText = () => {

    return (
        <div className={styles.wrapper}>
            <p>
                Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris.
                Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel.
                Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus.
                Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis.
                Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam.
                Phasellus nec fringilla elit.

                Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit,
                pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.
            </p>

            <div className={styles.checkscontainer}>
                <div><Image src={'./check.svg'} alt='image' width={12} height={12} /></div>
                <p>100 g of fresh leaves provides.</p>
            </div>

            <div className={styles.checkscontainer}>
                <div><Image src={'./check.svg'} alt='image' width={12} height={12} /></div>
                <p>100 g of fresh leaves provides.</p>
            </div>

            <div className={styles.checkscontainer}>
                <div><Image src={'./check.svg'} alt='image' width={12} height={12} /></div>
                <p>100 g of fresh leaves provides.</p>
            </div>

            <div className={styles.checkscontainer}>
                <div><Image src={'./check.svg'} alt='image' width={12} height={12} /></div>
                <p>100 g of fresh leaves provides.</p>
            </div>
        </div>
    )
}

export default BodyText;