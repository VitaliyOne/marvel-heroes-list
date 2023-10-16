import HeroCard from "./HeroCard";
import { Hero } from "../App";
import { useEffect } from "react";
import InfoListHeroes from "./InfoListHeroes";
interface ListHeroesProps {
  heroes: Hero[];
  getNextHeroes: () => void;
}

const ListHeroes = (props: ListHeroesProps) => {
  useEffect(() => {
    //scroll processing
    if (props.heroes.length !== 1) {
      const handleScroll = () => {
        if (
          window.innerHeight + window.scrollY ===
          document.body.offsetHeight
        ) {
          props.getNextHeroes();
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [props]);

  console.log(props.heroes[0]);
  return (
    <div>
      {props.heroes.length === 1 ? (
        <div>
          <InfoListHeroes heroes={props.heroes} />
        </div>
      ) : (
        <div>
          {!props.heroes.length ? (
            <div className="spinner"></div>
          ) : (
            <div className="listHeroes">
              {props.heroes.map((hero: Hero) => (
                <HeroCard heroes={props.heroes} hero={hero} key={hero.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ListHeroes;
