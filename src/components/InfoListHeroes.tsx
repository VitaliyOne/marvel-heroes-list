import HeroCard from "./HeroCard";
import { Hero } from "../App";

interface InfoListHeroesProps {
  heroes: Hero[];
}

const InfoListHeroes = (props: InfoListHeroesProps) => {
  return (
    <div className="listHeroes">
      <div>
        {props.heroes.map((hero: Hero) => (
          <HeroCard heroes={props.heroes} hero={hero} key={hero.id} />
        ))}
      </div>
      <div className="infoHero">
        <h2 style={{ margin: "10px" }}>Comics</h2>
        {props.heroes[0].comics.items.map((comics: { name: string }) => (
          <p style={{ textAlign: "start", margin: "10px" }} key={comics.name}>
            • {comics.name}
          </p>
        ))}
      </div>
      <div className="infoHero">
        <h2 style={{ margin: "10px" }}>Stories</h2>
        {props.heroes[0].stories.items.map((stories: { name: string }) => (
          <p style={{ textAlign: "start", margin: "10px" }} key={stories.name}>
            • {stories.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfoListHeroes;
