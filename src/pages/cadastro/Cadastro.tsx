import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'
import { toastAlert } from '../../util/ToastAlert'

function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        toastAlert('Usuário cadastrado com sucesso', 'sucesso')

      } catch (error) {
        toastAlert('Erro ao cadastrar usuário. Tente novamente mais tarde.', 'erro')
      }

    } else {
      toastAlert('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3' onSubmit={cadastrarNovoUsuario}>
          <h2 className='text-slate-900 text-5xl font-mono'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome" className='font-mono'>Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border border-slate-700 rounded-2xl p-1.5 font-mono"
              value={usuario.nome} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className='font-mono'>Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border border-slate-700 rounded-2xl p-1.5 font-mono"
              value={usuario.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto" className='font-mono'>Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border border-slate-700 rounded-2xl p-1.5 font-mono"
              value={usuario.foto} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className='font-mono'>Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border border-slate-700 rounded-2xl p-1.5 font-mono"
              value={usuario.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className='font-mono'>Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border border-slate-700 rounded-2xl p-1.5 font-mono"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8 mt-4">
            <button className=' font-mono rounded-2xl text-white bg-red-400 hover:bg-red-900 w-1/2 py-1.5' onClick={back}>
              Cancelar
            </button>
            <button className=' font-mono rounded-2xl text-white bg-cyan-500 hover:bg-cyan-900 w-1/2 py-1.5' type='submit'>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro