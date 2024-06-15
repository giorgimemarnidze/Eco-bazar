'use client';

import Image from "next/image";
import HeaderDown from "../Components/Header/HeaderDown";
import Menu from "../Components/Menu/Menu";
import styles from './page.module.css';
import FirstSection from "./FirstSection/FirstSection";
import AllCategories from "../Components/AllCategories/AllCategories";
import PriceCalculator from "../Components/PriceCalculator/PriceCalculator";
import Rating from "../Components/Rating/Rating";
import PopularTag from "../Components/PopularTag/PopularTag";
import Banner from "./Banner/Banner";
import SalePro from "./SalePro/SalePro";
import ProductItem from "../Components/Products/ProductItem/ProductItem";
import Link from "next/link";

export default () => {
    return (
        <div className={styles.wrapper}>
            <FirstSection />

            <div className={styles.container}>
                <div>
                    <AllCategories />
                    <PriceCalculator />
                    <Rating />
                    <PopularTag />
                    <Banner />
                    <SalePro />
                </div>

                <div className={styles.products}>
                    <ProductItem src={"potato.svg"}
                        border="green"
                        title={"Big Potatoes"}
                        price={"$14.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />

                    <Link href={'Page3'}><ProductItem src={"yabayi.svg"}
                        border="green"
                        title={"Cabbage"}
                        price={"$24.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    /></Link>

                    <ProductItem src={"wiwaka.svg"}
                        border="green"
                        overlined="$20.00"
                        title={"Green Chili"}
                        price={"$14.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />
                    <ProductItem src={"apple.svg"}
                        border="green"
                        title={"Green Apple"}
                        price={"$12.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />
                    <ProductItem src={"luttece.svg"}
                        border="green"
                        title={"Green Luttece"}
                        price={"$11.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />
                    <ProductItem src={"witelibulgaruli.svg"}
                        border="green"
                        title={"Green Capsicum"}
                        price={"$14.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />
                    <ProductItem src={"atami.svg"}
                        border="green"
                        title={"Fresh Mango"}
                        price={"$14.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />
                    <ProductItem src={"eggplant.svg"}
                        border="green"
                        title={"Eggplant"}
                        price={"$14.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />
                    <ProductItem src={"yvavilovani.svg"}
                        border="green"
                        title={"Fresh Cauliflower"}
                        price={"$14.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />
                    <ProductItem src={"corn.svg"}
                        border="green"
                        overlined="$22.99"
                        title={"Ladies Finger"}
                        price={"$14.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />
                    <ProductItem src={"kitri.svg"}
                        border="green"
                        title={"Green Cucumber"}
                        price={"$14.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />
                    <ProductItem src={"pomidori.svg"}
                        border="green"
                        title={"Tomato"}
                        price={"$14.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />
                    <ProductItem src={"witeliwiwaka.svg"}
                        border="green"
                        title={"Red Chili"}
                        price={"$14.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />
                    <ProductItem src={"mwvanelobio.svg"}
                        border="green"
                        title={"Ladies Finger"}
                        price={"$14.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />
                    <ProductItem src={"orange.svg"}
                        border="green"
                        title={"Orange"}
                        price={"$14.99"}
                        img={"cart.svg"}
                        img2={"Rating.svg"}
                    />
                </div>
            </div>

        </div>
    )
}