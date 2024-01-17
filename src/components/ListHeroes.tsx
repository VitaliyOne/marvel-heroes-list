import HeroCard from "./HeroCard";
import { Hero } from "../App";
import { useEffect } from "react";
import InfoListHeroes from "./InfoListHeroes";
import MyButton from "./UI/button/MyButton";
interface ListHeroesProps {
  heroes: Hero[];
  getNextHeroes: () => void;
  clickHeroCard: (name: string) => void;
  clickBack?: () => void;
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
            clickBack={props.clickBack}
          />
        </div>
      ) : (
        <div>
          {!props.heroes.length ? (
            <div className="spinner"></div>
          ) : (
            <div>
              <div className="listHeroes">
                {props.heroes.map((hero: Hero, index: number) => (
                  <HeroCard
                    numberHero={index + 1}
                    clickHeroCard={props.clickHeroCard}
                    heroes={props.heroes}
                    hero={hero}
                    key={index}
                  />
                ))}
              </div>
              <MyButton
                children="Next"
                onClick={props.getNextHeroes}
              ></MyButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ListHeroes;
