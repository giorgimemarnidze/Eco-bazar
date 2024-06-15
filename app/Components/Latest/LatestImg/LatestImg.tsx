import Image from "next/image";
import Styles from './LatestImg.module.scss'

type Props = {
    src: any;
}

const LatestImg = (props: Props) => {

    return( 
        <Image src={props.src} alt="image" width={424} height={324} className={Styles.image} />
    )
}

export default LatestImg;