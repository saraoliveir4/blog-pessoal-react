import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlert } from "../../util/ToastAlert";

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlert('Usuário deslogado com sucesso', 'info');
    navigate("/login");
  }

  let navbarComponent;

  if (usuario.token !== "") {
    navbarComponent = (
      <>
        <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center py-4">
          <div className="container flex justify-between text-lg">
            <Link to="/home" className="text-2xl font-bold uppercase">
              Blog Pessoal
            </Link>

            <div className="flex gap-4">
              <Link to="/postagens" className="hover:underline">
                Postagens
              </Link>
              <Link to="/temas" className="hover:underline">
                Temas
              </Link>
              <Link to="/cadastrarTema" className="hover:underline">
                Cadastrar tema
              </Link>
              <Link to="/perfil" className="hover:underline">
                Perfil
              </Link>
              <Link to="" onClick={logout} className="hover:underline">
                Sair
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <>{navbarComponent}</>;
}

export default Navbar;
