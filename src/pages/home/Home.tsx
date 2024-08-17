import React from "react";
import "./Home.css";
import girlImage from "../../assets/girl.png";
import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Oi! Que bom ter você aqui!</h2>
            <p className="text-xl">
              Participe das nossas discussões sobre músicas, filmes e séries!
            </p>

            <div className="flex justify-around gap-4">
            <ModalPostagem />
              <button className="rounded bg-white text-blue-800 py-2 px-4">
                Ver postagens
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src={girlImage}
              alt="Garota com headphone ouvindo música"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
