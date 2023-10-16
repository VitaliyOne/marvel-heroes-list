import HeroCard from "./HeroCard";
import { Hero } from "../App";
import { useEffect } from "react";
interface ListHeroesProps {
  heroes: Hero[];
  getNextHeroes: () => void;
}

const ListHeroes = (props: ListHeroesProps) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY === document.body.offsetHeight) {
        props.getNextHeroes();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props]);

  return (
    <div>
      {!props.heroes.length ? (
        <div className="spinner"></div>
      ) : (
        <div className="listHeroes">
          {props.heroes.map((hero: Hero) => (
            <HeroCard hero={hero} key={hero.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListHeroes;
