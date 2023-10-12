import "./App.css";
import { useState, useEffect } from "react";
import MyButton from "./components/UI/button/MyButton";
import Header from "./components/Header";
import HeroCard from "./components/HeroCard";
import Footer from "./components/Footer";
import MyInput from "./components/UI/input/MyInput";

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
  const [offset, setOffset] = useState<number>(10);
  const [nameHero, setNameHero] = useState<string>("");
  const offsetUrl = Math.round(Math.random() * 50 * offset);
  const urlHeroes = `https://gateway.marvel.com/v1/public/characters?limit=12&offset=${offsetUrl}&ts=${
    import.meta.env.VITE_TS
  }&apikey=${import.meta.env.VITE_PUBLIC_API_KEY}&hash=${
    import.meta.env.VITE_HASH
  }`;
  const urlNameHero = `https://gateway.marvel.com/v1/public/characters?name=Frenzy&ts=${
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
  }, []);

  // const getNextHeroes = () => {
  //   fetch(urlNameHero)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => setHeroes([...heroes, ...data.data.results]));
  // };

  const getNextHeroes = () => {
    fetch(urlNameHero)
      .then((response) => {
        return response.json();
      })
      .then((data) => setHeroes(data.data.results));
  };

  const getOffset = () => {
    fetch(urlHeroes)
      .then((response) => {
        return response.json();
      })
      .then((data) => setHeroes(data.data.results));
  };

  const getHero = () => {
    if (nameHero) {
      const urlHero = `https://gateway.marvel.com/v1/public/characters?name=${nameHero}&ts=${
        import.meta.env.VITE_TS
      }&apikey=${import.meta.env.VITE_PUBLIC_API_KEY}&hash=${
        import.meta.env.VITE_HASH
      }`;
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

  // const bottom =
  //   document.documentElement.scrollHeight -
  //     document.documentElement.scrollTop ===
  //   document.documentElement.clientHeight;

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
