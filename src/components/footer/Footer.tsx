import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const { usuario, handleLogout } = useContext(AuthContext);

  let footerComponent;

  let data = new Date().getFullYear();

  if (usuario.token !== "") {
    footerComponent = (
      <>
        <div className="w-full text-white font-mono bg-cyan-800 flex justify-center py-4">
          <div className="container flex flex-col items-center py-4">
            <p className="text-xl font-bold">
              Blog pessoal | &copy; Sara Oliveira {data}
            </p>
            <p className="text-lg">Acesse nossas redes sociais</p>
            <div className="flex gap-2">
              <LinkedinLogo size={48} weight="bold" />
              <InstagramLogo size={48} weight="bold" />
              <FacebookLogo size={48} weight="bold" />
            </div>
          </div>
        </div>
      </>
    );
  }
  return <>{footerComponent}</>;
}

export default Footer;
