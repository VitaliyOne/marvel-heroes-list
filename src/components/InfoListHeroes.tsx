import HeroCard from "./HeroCard";
import { Hero } from "../App";
import MyButton from "./UI/button/MyButton";

interface InfoListHeroesProps {
  heroes: Hero[];
  clickHeroCard: (name: string) => void;
  clickBack?: () => void;
}

const InfoListHeroes = (props: InfoListHeroesProps) => {
  return (
    <div>
      <div className="listHeroes">
        <div>
          {props.heroes.map((hero: Hero) => (
            <HeroCard
              heroes={props.heroes}
              hero={hero}
              key={hero.id}
              clickHeroCard={props.clickHeroCard}
            />
          ))}
        </div>
        <div className="infoHero">
          <h2>Comics</h2>
          {props.heroes[0].comics.items.map(
            (comics: { name: string; resourceURI: string }) => (
              <p className="pInfoListHeroes" key={comics.resourceURI}>
                • {comics.name}
              </p>
            ),
          )}
        </div>
        <div className="infoHero">
          <h2>Stories</h2>
          {props.heroes[0].stories.items.map(
            (stories: { name: string; resourceURI: string }) => (
              <p className="pInfoListHeroes" key={stories.resourceURI}>
                • {stories.name}
              </p>
            ),
          )}
        </div>
      </div>
      <MyButton children="Back" onClick={props.clickBack}></MyButton>
    </div>
  );
};

export default InfoListHeroes;
