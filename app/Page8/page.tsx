'use client'

import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Image from 'next/image';
import Filters from './Filters/Filters';
import Products from './Products/Products';

const Page8 = () => {


    return (
        <div className={styles.cc}>
            <Filters />
            <Products />
        </div>
    )
}

export default Page8;