import React from 'react';
import imgA from './images/1.jpg';
import imgB from './images/2.jpg';
import imgC from './images/3.jpg';
import imgD from './images/4.jpg';
import imgE from './images/5.jpg';

function Food({name, image, altText}){
  return(
    <div>
      <h2>I love {name}</h2>
      <img src={image} alt={altText} />
    </div>
  );
}

const foodILink = [
  {
    id: 1,
    name: '김치',
    image: imgA,
    altText: '김치를 먹는 모습'
  },
  {
    id: 2,
    name: '햄버거',
    image: imgB,
    altText: '햄버거를 먹는 모습'
  },
  {
    id: 3,
    name: '피자',
    image: imgC,
    altText: '피자를 먹는 모습'
  },
  {
    id: 4,
    name: '과자',
    image: imgD,
    altText: '과자를 먹는 모습'
  },
  {
    id: 5,
    name: '아이스크림',
    image: imgE,
    altText: '아이스크림을 먹는 모습'
  }
];

function App(){
  return (
    <div>{foodILink.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} altText={dish.altText}/>))}
    </div>
  );
}

export default App;
