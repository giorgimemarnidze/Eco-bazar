import MediaItem from './MediaItem/MediaItem';
import styles from './media.module.scss';
import Link from 'next/link';

const media = () => {

    return (
        <div className={styles.container}>

            <Link href={'https://facebook.com'} target='_blank'>
                <MediaItem src={'./fb-eco.svg'} width={18} height={18} backgroundColor='colored' />
            </Link>

            <Link href={'https://twitter.com'} target='_blank'>
                <MediaItem src={'./twitter-eco.svg'} width={18} height={18} />
            </Link>

            <Link href={'https://pinterest.com'} target='_blank'>
                <MediaItem src={'./pinterest-eco.svg'} width={18} height={18} />
            </Link>

            <Link href={'https://instagram.com'} target='_blank'>
                <MediaItem src={'./instagram-eco.svg'} width={18} height={18} />
            </Link>

        </div>
    )
}


export default media;