import React from 'react';
import FormularioPostagem from '../formularioPostagens/FormularioPostagens';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='border border-cyan-800 text-cyan-800 rounded-2xl px-4 py-1.5 hover:bg-white hover:text-cyan-500'>Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;