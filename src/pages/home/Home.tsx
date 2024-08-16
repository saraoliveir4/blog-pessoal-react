import React, { useEffect, useState } from "react";
import "./Home.css";

/*interface minhaProps {
  title: string;
  description: string;
}

function Home(props: minhaProps) {
  return (
    <>
      <h2 className="titulo">{props.title}</h2>
      <p>{props.description}</p>
    </>
  );
}

export default Home;
*/
/*
function Home() {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState("");

  useEffect(() => {
    if (completed) {
      setTarefa("Parabéns! Você concluiu a tarefa!");
    }
  }, [completed]);

  return (
    <div>
      <h1>Tarefa</h1>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
    </div>
  );
}

export default Home;
*/
/*
function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <h1 className="titulo">Bem-vindo de volta!</h1>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Entrar</button>
      )}
    </div>
  );
}
export default Home;

import React from 'react';
import './Home.css';

*/

function Home() {
    return (
        <>

            <div>
                <h3 className='text-xl'>justify-content alinhamento horizontal</h3>
                <h5>justify-start Esquerda</h5>
                <div className="flex flex-row  justify-start m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-end Direita</h5>
                <div className="flex flex-row  justify-end m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-center Centro</h5>
                <div className="flex flex-row  justify-center m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-around estremidades</h5>
                <div className="flex flex-row  justify-between m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-around estremidades com espaçamento</h5>
                <div className="flex flex-row  justify-around m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>

            </div>

            <div className='mt-12'>
                <h3 className='text-xl'>justify-content alinhamento vertical</h3>
                <div className='w-auto h-60 bg-gray-400 flex  justify-center items-start m-3'>
                    <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical topo</div>
                </div>
                <div className='w-auto h-60 bg-gray-400 flex  justify-center items-center m-3'>
                    <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical centro</div>
                </div>
                <div className='w-auto h-60 bg-gray-400 flex  justify-center items-end m-3'>
                    <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical base</div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-12 gap-2 m-4'>

                    <div className='col-span-6 bg-green-300'>
                        container 1
                    </div>

                    <div className='col-span-6 bg-yellow-200'>
                        container 2
                    </div>

                </div>
                <div className='grid grid-cols-12 gap-2 m-4'>

                    <div className='col-span-8 bg-green-300'>
                        container 1
                    </div>

                    <div className='col-span-4 bg-yellow-200'>
                        container 2
                    </div>

                </div>

                <div className='grid grid-cols-12 gap-2 m-4'>

                    <div className='col-span-4 bg-green-300'>
                        container 1
                    </div>

                    <div className='col-span-4 bg-yellow-200'>
                        container 2
                    </div>

                    <div className='col-span-4 bg-red-500'>
                        container 3
                    </div>

                </div>

                <div className='grid grid-cols-12 gap-2 m-4'>

                    <div className='col-span-3 bg-green-300'>
                        container 1
                    </div>

                    <div className='col-span-3 bg-yellow-200'>
                        container 2
                    </div>

                    <div className='col-span-3 bg-red-500'>
                        container 3
                    </div>

                    <div className='col-span-3 bg-blue-500'>
                        container 4
                    </div>

                </div>

                <div className='grid grid-cols-12 gap-2 m-4'>

                    <div className='col-span-4 bg-green-300'>
                        container 1
                    </div>

                    <div className='col-span-4 bg-yellow-200'>
                        container 2
                    </div>

                    <div className='col-span-2 bg-red-500'>
                        container 3
                    </div>

                    <div className='col-span-2 bg-blue-500'>
                        container 4
                    </div>

                </div>

            </div>

        </>
    );
}

export default Home;