import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">
              Oi! Que bom ter você está aqui!
            </h2>
            <p className="text-xl">
              Participe das nossas discussões sobre músicas, filmes e séries!
            </p>

            <div className="flex justify-around gap-4">
              <button className="rounded bg-white text-blue-800 py-2 px-4">
                Ver postagens
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://img.pikbest.com/png-images/qiantu/original-music-listening-girl-illustration_2737011.png!sw800"
              alt=""
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
