import { limitState, sortState } from "@/app/States";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styles from './Products.module.scss';

export default () => {
    const [products, setProducts] = useState([]);
    const [sort] = useRecoilState(sortState);
    const [limit] = useRecoilState(limitState);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?sort=${sort}&limit=${limit}`)
            .then((result) => {
                setProducts(result.data);
                console.log(result.data);

            })
    }, [sort, limit])


    return (
        <div className={styles.wrapper}>
            {
                products.map((product: any) => <div className={styles.container}>
                    <img src={product.image} width={200} height={150} alt="image" />
                    <span>{product.title}</span>
                    {product.category}
                    {product.price}
                </div>)
            }
        </div>
    )
}