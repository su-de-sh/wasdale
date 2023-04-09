import "./App.css";
import Navbar from "./components/Navbar";
import CarouselComponent from "./components/Carousel";
import AboutUs from "./components/AboutUs";

function App() {
  const slides = [
    {
      id: 1,

      content: (
        <div>
          <img src="/src/assets/images/5.jpg" alt="img" />
        </div>
      ), // this will be replaced by the actual slide component
    },
    {
      id: 2,
      content: (
        <div>
          <img src="/src/assets/images/1.jpg" alt="img" />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div>
          <img src="/src/assets/images/6.jpg" alt="img" />
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div>
          <img src="/src/assets/images/5.jpg" alt="img" />
        </div>
      ),
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <CarouselComponent slides={slides} />
      <AboutUs />
    </div>
  );
}

export default App;
