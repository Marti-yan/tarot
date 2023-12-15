import "./App.css";

// import Home from "./pages/home";
// import Numerologia from "./pages/numerologia";
import AppRoutes from "./routes";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
    <>
       
      <Nav />
      <Header />
      <AppRoutes />
      {/* <Footer /> */}
 </>
  )
    

    
 
}

export default App;
