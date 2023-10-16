import HeroCard from "./HeroCard";
import { Hero } from "../App";
import { useEffect } from "react";
import InfoListHeroes from "./InfoListHeroes";
interface ListHeroesProps {
  heroes: Hero[];
  getNextHeroes: () => void;
  clickHeroCard: (name: string) => void;
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
  return (
    <div>
      {props.heroes.length === 1 ? (
        <div>
          <InfoListHeroes
            heroes={props.heroes}
            clickHeroCard={props.clickHeroCard}
          />
        </div>
      ) : (
        <div>
          {!props.heroes.length ? (
            <div className="spinner"></div>
          ) : (
            <div className="listHeroes">
              {props.heroes.map((hero: Hero) => (
                <HeroCard
                  clickHeroCard={props.clickHeroCard}
                  heroes={props.heroes}
                  hero={hero}
                  key={hero.id}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ListHeroes;
