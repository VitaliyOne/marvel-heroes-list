import "./App.css";
import { useState, useEffect } from "react";
import MyButton from "./components/UI/button/MyButton";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyInput from "./components/UI/input/MyInput";
import ListHeroes from "./components/ListHeroes";

export interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    items: [];
  };
  stories: {
    items: [];
  };
}

function App() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [offset, setOffset] = useState<number>(10);
  const [nameHero, setNameHero] = useState<string>("");
  const offsetUrl = Math.round(Math.random() * 40 * offset);

  const urlHeroes = `https://gateway.marvel.com/v1/public/characters?limit=12&offset=${offsetUrl}&ts=${
    import.meta.env.VITE_TS
  }&apikey=${import.meta.env.VITE_PUBLIC_API_KEY}&hash=${
    import.meta.env.VITE_HASH
  }`;

  const urlHero = `https://gateway.marvel.com/v1/public/characters?name=${nameHero}&ts=${
    import.meta.env.VITE_TS
  }&apikey=${import.meta.env.VITE_PUBLIC_API_KEY}&hash=${
    import.meta.env.VITE_HASH
  }`;

  useEffect(() => {
    fetch(urlHeroes)
      .then((response) => {
        return response.json();
      })
      .then((data) => setHeroes(data.data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNextHeroes = () => {
    fetch(urlHeroes)
      .then((response) => {
        return response.json();
      })
      .then((data) => setHeroes([...heroes, ...data.data.results]));
  };

  const getOffset = () => {
    setHeroes([]);
    fetch(urlHeroes)
      .then((response) => {
        return response.json();
      })
      .then((data) => setHeroes(data.data.results));
  };

  const getHero = () => {
    if (nameHero) {
      fetch(urlHero)
        .then((response) => {
          return response.json();
        })
        .then((data) => setHeroes(data.data.results));
      setNameHero("");
    } else {
      alert("Enter a name");
    }
  };

  return (
    <>
      <div className="App">
        <Header />
        <div className="contentBox">
          <div>
            <div className="toolbar">
              <MyInput
                type="text"
                placeholder="Name hero"
                onChange={(event) => setNameHero(event.target.value)}
                value={nameHero}
                pattern="^[a-zA-Z]"
              />
              <MyButton children="Search" onClick={getHero}></MyButton>
            </div>
            <div className="toolbar">
              <MyInput
                pattern="[0-9]*"
                type="number"
                placeholder="Offset"
                onChange={(event) => setOffset(parseInt(event.target.value))}
              />
              <MyButton children="Search" onClick={getOffset}></MyButton>
            </div>
          </div>
          <ListHeroes heroes={heroes} getNextHeroes={getNextHeroes} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
