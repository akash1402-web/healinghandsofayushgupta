import React from 'react';
import Card from './Card';

const Cards = () => {
  return (
    <div className='flex flex-wrap justify-center xl:justify-between gap-3 md:gap-6 md:gap-y-16'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Cards
