import "./App.css";
import { useState, useEffect } from "react";
import MyButton from "./components/UI/button/MyButton";
import Header from "./components/Header";
import MyInput from "./components/UI/input/MyInput";
import HeroCard from "./components/HeroCard";
import Footer from "./components/Footer";
import ToolBar from "./components/ToolBar";

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
  const [offset, setOffset] = useState<number>(12);
  const offsetUrl = Math.round(Math.random() * 50 * offset);
  const url = `https://gateway.marvel.com/v1/public/characters?limit=12&offset=${offsetUrl}&ts=${
    import.meta.env.VITE_TS
  }&apikey=${import.meta.env.VITE_PUBLIC_API_KEY}&hash=${
    import.meta.env.VITE_HASH
  }`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => setHeroes(data.data.results));
  }, [offset]);

  const getNextHeroes = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => setHeroes([...heroes, ...data.data.results]));
    console.log(heroes);
  };

  return (
    <>
      <div className="App">
        <Header />
        <div className="contentBox">
          <ToolBar />
          <div className="listHeroes">
            {heroes.map((hero) => (
              <HeroCard hero={hero} key={hero.id} />
            ))}
          </div>
          <MyButton children="Next" onClick={getNextHeroes}></MyButton>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
