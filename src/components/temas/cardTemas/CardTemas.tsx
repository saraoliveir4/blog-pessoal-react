import React from "react";
import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";

interface CardTemaProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemaProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-cyan-800 text-white font-bold text-2xl font-mono">
        Tema
      </header>
      <p className="p-8 text-3xl font-mono bg-slate-100 h-full">{tema.descricao}</p>
      <div className="flex">
        <Link
          to={`/editarTema/${tema.id}`}
          className="w-full font-mono text-slate-100 bg-cyan-500 hover:bg-cyan-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarTema/${tema.id}`}
          className="text-slate-100 font-mono bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;
