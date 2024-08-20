import React from "react";
import "./Home.css";
import cinemaImage from '../../assets/img/cinema.png'
import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-cyan-500 to-white">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4 px-20">
            <h2 className="text-5xl text-center font-bold font-mono">Oi! Que bom ter você aqui!</h2>
            <p className="text-2xl text-center font-mono">
              Participe das nossas discussões sobre o mundo da música, filmes e séries!
            </p>

            <div className="flex justify-around gap-4 font-mono">
            <ModalPostagem />
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src={cinemaImage}
              alt="Claquete de cinema"
              className="w-1/2"
            />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
