import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Tema from '../../../models/Tema'
import { buscar, deletar } from '../../../services/Service'
import { toastAlert } from '../../../util/ToastAlert'

function DeletarTema() {
    const [tema, setTema] = useState<Tema>({} as Tema)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlert('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlert('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/temas")
    }

    async function deletarTema() {
        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlert('Tema apagado com sucesso', 'sucesso')

        } catch (error) {
            toastAlert('Erro ao apagar o Tema', 'erro')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4 font-mono'>Deletar Tema</h1>

            <p className='font-mono text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o tema a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-cyan-800 text-white font-bold text-2xl font-mono'>Tema</header>
                <p className='p-8 text-3xl bg-slate-100 h-full font-mono'>{tema.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-700 w-full py-2 font-mono' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-cyan-500 hover:bg-cyan-800 flex items-center justify-center font-mono' onClick={deletarTema}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarTema