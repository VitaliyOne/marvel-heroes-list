import HeroCard from "./HeroCard";
import { Hero } from "../App";
import MyButton from "./UI/button/MyButton";
interface ListHeroesProps {
  heroes: Hero[];
  getNextHeroes: () => void;
}

const ListHeroes = (props: ListHeroesProps) => {
  return (
    <div>
      {!props.heroes.length ? (
        <div className="spinner"></div>
      ) : (
        <div>
          <div className="listHeroes">
            {props.heroes.map((hero: Hero) => (
              <HeroCard hero={hero} key={hero.id} />
            ))}
          </div>
          <MyButton
            children="Next"
            onClick={() => props.getNextHeroes()}
          ></MyButton>
        </div>
      )}
    </div>
  );
};

export default ListHeroes;
