import React from 'react';
import qs from 'query-string'
import { Product } from '../types';

const URL = `https://e-commerce-admin-dun.vercel.app/api/9ab899f1-ec96-459a-95d9-b16061d44548/products`;

interface Query {
    categoryId?: string;
    authorId?: string;
    publisherId?: string;
    isFeatured?: boolean;
    price?: number;
    count?: number;
}

const getProducts = async(query:Query): Promise<Product[]> => {

    const url = qs.stringifyUrl({
        url: URL,
        query:{
            categoryId: query.categoryId,
            authorId: query.authorId,
            price: query.price,
            publisherId: query.publisherId,
            isFeatured: query.isFeatured,
            count: query.count,
        }
    })

    const res = await fetch(url);

    return res.json();

}

export default getProducts;