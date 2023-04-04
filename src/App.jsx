import "./App.css";
import Navbar from "./components/Navbar";
import CarouselComponent from "./components/Carousel";

function App() {
  const slides = [
    {
      id: 1,

      content: (
        <div>
          <img src="/src/assets/images/bg2.jpeg" alt="img" />
        </div>
      ), // this will be replaced by the actual slide component
    },
    {
      id: 2,
      content: (
        <div>
          <img src="/src/assets/images/room.jpeg" alt="img" />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div>
          <img src="/src/assets/images/dining.jpeg" alt="img" />
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div>
          <img src="/src/assets/images/bg3.jpeg" alt="img" />
        </div>
      ),
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <CarouselComponent slides={slides} />
    </div>
  );
}

export default App;
