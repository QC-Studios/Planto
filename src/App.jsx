import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home";

const App = () => {
    return (
        <div className="relative z-0 bg-[#1A2317] h-fit">
            <NavBar />
            <Home />
            <Footer />
        </div>
    );
};

export default App;
