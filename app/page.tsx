'use client';

import axios from 'react'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header/HeaderUp/Header";
import HeaderDown from "./Components/Header/HeaderDown";
import Menu from "./Components/Menu/Menu";
import Article from "./Components/Article/Article";
import Conditions from "./Components/Conditions/Conditions";
import Categories from "./Components/Categories/Categories";
import Products from "./Components/Products/Products";
import Cards from "./Components/Cards/Cards";
import AddCart from "./Components/AddCart/AddCart";
import { Deals } from "./Components/Deals/Deals";
import LongImage from "./Components/LongImage/LongImage";
import FeaturedProduct from "./Components/FeaturedProducts/FeaturedProduct";
import Latest from "./Components/Latest/Latest";
import Testimonials from "./Components/Testimonials/Testimonials";
import Sponsors from "./Components/Sponsors/Sponsors";
import Follow from "./Components/Follow/Follow";
import Subscribe from "./Components/Subscribe/Subscribe";



export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Article />
      <Conditions />
      <Categories />
      <Products />
      <Cards />
      <Deals />
      <LongImage />
      <FeaturedProduct />
      <Latest />
      <Testimonials />
      <Sponsors />
      <Follow />
    </div>


  );
}
