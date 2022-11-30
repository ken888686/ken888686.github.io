import React from 'react';
import { MdFavoriteBorder, MdList } from 'react-icons/md';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Props {
  product: Product;
}

function Card({ product }: Props) {
  const { id, title, price, description, category, image, rating } = product;
  return (
    <a
      href='#'
      className='inline-block rounded-3xl p-5 shadow-2xl transition-shadow hover:shadow-xl'
    >
      <div className='flex items-center justify-between'>
        <span className='bg-slate-100 px-4 py-1 text-slate-500'>SALE</span>
        <div className='flex items-center justify-center gap-1'>
          <MdList className='text-3xl' />
          <MdFavoriteBorder className='text-2xl' />
        </div>
      </div>
      <img src={image} alt={description} />
      <div className='mt-5'>
        <h4 className=''>{title}</h4>
        <h4 className='my-3 inline-block rounded-full bg-red-500 bg-opacity-10 py-1 px-3 hover:bg-opacity-50'>
          {category}
        </h4>
        <h4 className=''>${price}</h4>
      </div>
    </a>
  );
}

export default Card;
