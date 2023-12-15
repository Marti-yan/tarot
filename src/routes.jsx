import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Numerologia from "./pages/numerologia";
import Salmos from "./pages/salmos";
import MagiaDosCiganos from "./pages/magiaDosCiganos";
import BanhosErvas from "./pages/banhosErvas";
import MensagemDasVelas from "./pages/MensagemVelas";
import Cartomancia from "./pages/cartomancia";
import MesaRadionica from "./pages/MesaRadionica";
import TarotAnjos from "./pages/TarotdosAnjos";
function AppRoutes(){
    return (


        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />}> </Route>
                <Route path="/magia-dos-ciganos" element={ <MagiaDosCiganos />}> </Route>
                <Route path="/banhos-e-ervas" element={ <BanhosErvas />}> </Route>
                <Route path="/cartomancia" element={ <Cartomancia />}> </Route>
                <Route path="/mensagem-das-velas" element={ <MensagemDasVelas />}> </Route>
                <Route path="/mesa-radionica" element={ <MesaRadionica />}> </Route>
                <Route path="/numerologia" element={ <Numerologia />}> </Route>
                <Route path="/salmos" element={ <Salmos />}> </Route>
                <Route path="/tarot-dos-anjos" element={ <TarotAnjos />}> </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;