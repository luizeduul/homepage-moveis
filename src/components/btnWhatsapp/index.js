import React from 'react';
import '../../pages/styles.css';

import whatsapp from '../../assets/whatsapp.png';

export default function BtnWhatsapp() {
  return (
    <div className='bg-white shadow rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row'>
      <img src={whatsapp} alt='Whatsapp' width={50} height={50} />
      <div className='ml-2'>
        <h3 className='font-bold text-2xl'>Orçar seu projeto!</h3>
        <p className='text-xs'>Projeto e orçamento sem compromisso.</p>
        <p className='font-bold'>(44) 99999-9999</p>
      </div>
    </div>
  );
}