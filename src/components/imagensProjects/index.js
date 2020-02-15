import React from 'react';
import '../../pages/styles.css';

import sala from '../../assets/sala.png';
import estante from '../../assets/estante sala.png';
import quarto from '../../assets/quarto.png';
import quarto2 from '../../assets/quarto2.png';
import cozinha1 from '../../assets/cozinha1.png';
import cozinha2 from '../../assets/cozinha2.png';



export default function BtnWhatsapp() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='max-w-sm'>
          <div className='m-2 rounded shadow-lg'>
            <img src={sala} alt='Sala' />
            <div className='px-6 py-4'>
              <p className='font-bold text-xl mb-2'>Painel de tv Sala</p>
              <p>Painel de sala 3m x 2m com suporte para tv, gavetas, prateleiras para colocar objetos</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap'>
        <div className='max-w-sm'>
          <div className='m-2 rounded shadow-lg'>
            <img src={estante} alt='estante' />
            <div className='px-6 py-4'>
              <p className='font-bold text-xl mb-2'>Estante para sala</p>
              <p>Estante painel com 2,5m x 1,7m local para tv, acomodação de objetos de decoração</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap'>
        <div className='max-w-sm'>
          <div className='m-2 rounded shadow-lg'>
            <img src={cozinha1} alt='cozinha1' />
            <div className='px-6 py-4'>
              <p className='font-bold text-xl mb-2'>Jogo de cozinha cinza</p>
              <p>Jogo de cozinha cinza com 6 peças madeira pura</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap'>
        <div className='max-w-sm'>
          <div className='m-2 rounded shadow-lg'>
            <img src={cozinha2} alt='cozinha2' />
            <div className='px-6 py-4'>
              <p className='font-bold text-xl mb-2'>Jogo de cozinha </p>
              <p>Jogo de cozinha 6 peças balcões brancos e superiores marrom</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap'>
        <div className='max-w-sm'>
          <div className='m-2 rounded shadow-lg'>
            <img src={quarto} alt='quarto1' />
            <div className='px-6 py-4'>
              <p className='font-bold text-xl mb-2'>Jogo de quarto</p>
              <p>Guarda roupas com portas de correr amplo com armario superior a cama</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap'>
        <div className='max-w-sm'>
          <div className='m-2 rounded shadow-lg'>
            <img src={quarto2} alt='quarto2' />
            <div className='px-6 py-4'>
              <p className='font-bold text-xl mb-2'>Jogo de quarto elegance</p>
              <p>Guarda roupas com portas de correr, armário superior e escrivaninha</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}