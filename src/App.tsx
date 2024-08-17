import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./components/temas/listaTemas/ListaTemas";
import FormularioTemas from "./components/temas/formularioTemas/FormularioTemas";
import DeletarTema from './components/temas/deletarTemas/DeletarTemas';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import FormularioPostagem from './components/postagens/formularioPostagens/FormularioPostagens';
import DeletarPostagem from './components/postagens/deletarPostagens/DeletarPostagens';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrarTema" element={<FormularioTemas />} />
              <Route path="/editarTema/:id" element={<FormularioTemas />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
