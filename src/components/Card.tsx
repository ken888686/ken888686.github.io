import React from 'react';
import { MdFavoriteBorder, MdList } from 'react-icons/md';

const productList = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
];

function Card() {
  const { id, title, price, description, category, image, rating } = productList[0];
  return (
    <div className='rounded-3xl p-5 shadow-2xl transition-shadow hover:shadow-xl' key={id}>
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
    </div>
  );
}

export default Card;
