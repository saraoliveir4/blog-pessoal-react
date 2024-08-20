import React from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import perfilImage from '../../../assets/img/perfil.jpg'

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  return (
    <div className='border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-cyan-800 py-2 px-4 items-center gap-4">
          <img src={perfilImage} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase text-white font-mono'>{post.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase font-mono'>{post.titulo}</h4>
          <p className='font-mono'>{post.texto}</p>
          <p className='font-mono'>Tema: {post.tema?.descricao}</p>
          <p className='font-mono'>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarPostagem/${post.id}`} className='font-mono w-full text-white bg-cyan-500 hover:bg-cyan-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='font-mono text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem