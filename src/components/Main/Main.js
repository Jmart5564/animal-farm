import React from 'react';
import './Main.css';
import backgroundImg from '../../background.png';
import Animal from '../Animal/Animal.js';
import { animals } from '../../data.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {animals.map((animal) => (
        <Animal key={animal.name} {...animal} />
      ))}
    </main>
  );
}
