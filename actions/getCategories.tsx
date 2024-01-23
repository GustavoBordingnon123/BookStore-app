import React from 'react';
import { Category } from '../types';

const url = `https://e-commerce-admin-dun.vercel.app/api/9ab899f1-ec96-459a-95d9-b16061d44548/categories`;

const GetCategories = async (): Promise<Category[]> => {
    const res = await fetch(url);

    // Log para verificar o corpo da resposta
    // console.log('Url:', url);
    // console.log('Response body:', await res.text());

    return res.json();
};


export default GetCategories;