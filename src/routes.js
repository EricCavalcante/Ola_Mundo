import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SorebMim from "./Paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "Paginas/Post";
import NaoEncontrada from "Paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";
function AppRoutes() {
  return (
    <BrowserRouter>
      
      <ScrollToTop/>
      <Menu/>
      
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>} />
          <Route path="sobremim" element={<SorebMim/>} />
        </Route>

        <Route path="posts/:id" element={<Post/>}/>
        
        {/* 
        
        Na rota "/", a esturuta a ser renderizada é:

        <PaginaPadrao>
            <Inicio/>
        <PaginaPadrao/>


        Na rota "/sobremim", a esturuta a ser renderizada é:

         <PaginaPadrao>
            <SobreMim/>
        <PaginaPadrao/>

        */}

        <Route path="*" element={<NaoEncontrada/>}/>   
      </Routes>
    
    <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
