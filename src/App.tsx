import "./App.css";
import { useState, useEffect } from "react";
import MyButton from "./components/UI/button/MyButton";
import Header from "./components/Header";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import HeroCard from "./components/HeroCard";
import Footer from "./components/Footer";

export interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

function App() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    const offset = Math.round(Math.random() * 100);
    const url = `https://gateway.marvel.com/v1/public/characters?limit=10&offset=${offset}&ts=${
      import.meta.env.VITE_TS
    }&apikey=${import.meta.env.VITE_PUBLIC_API_KEY}&hash=${
      import.meta.env.VITE_HASH
    }`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => setHeroes(data.data.results));
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <div style={{ marginTop: "20px" }}></div>
        <div style={{ borderRadius: "10px", backgroundColor: "white" }}>
          <div className="toolbar">
            <MyInput placeholder="Name hero" />
            <MyButton children="Search"></MyButton>
          </div>
          <div className="toolbar">
            <MyInput placeholder="Offset" />
            <MyButton children="Search"></MyButton>
          </div>
          <div className="toolbar">
            <MySelect />
          </div>
          <div className="listHeroes">
            {heroes.map((hero) => (
              <HeroCard hero={hero} key={hero.id} />
            ))}
          </div>
        </div>
        <div style={{ marginTop: "20px" }}></div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
