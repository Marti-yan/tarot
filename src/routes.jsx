import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Numerologia from "./pages/numerologia";
import BanhosErvas from "./pages/banhosErvas";
import MensagemDasVelas from "./pages/MensagemVelas";
import Cartomancia from "./pages/cartomancia";
import MesaRadionica from "./pages/MesaRadionica";
import TarotAnjos from "./pages/TarotdosAnjos";

import MagiaDosCiganos from "./pages/magiaDosCiganos";
import Baralho from "./pages/magiaDosCiganos/baralho";
import Simpatia from "./pages/magiaDosCiganos/simpatia";
import Astrologia from "./pages/magiaDosCiganos/astrologia";
import Rituais from "./pages/magiaDosCiganos/rituais";



function AppRoutes(){
    return (


        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />}> </Route>

                <Route path="/magia-dos-ciganos" element={ <MagiaDosCiganos />}> </Route>
                <Route path="/magia-dos-ciganos/baralho" element={ <Baralho />}> </Route>
                <Route path="/magia-dos-ciganos/simpatia" element={ <Simpatia />}> </Route>
                <Route path="/magia-dos-ciganos/astrologia" element={ <Astrologia />}> </Route>
                <Route path="/magia-dos-ciganos/rituais" element={ <Rituais />}> </Route>

                <Route path="/banhos-e-ervas" element={ <BanhosErvas />}> </Route>
                <Route path="/cartomancia" element={ <Cartomancia />}> </Route>
                <Route path="/mensagem-das-velas" element={ <MensagemDasVelas />}> </Route>
                <Route path="/mesa-radionica" element={ <MesaRadionica />}> </Route>
                <Route path="/numerologia" element={ <Numerologia />}> </Route>
                <Route path="/tarot-dos-anjos" element={ <TarotAnjos />}> </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;