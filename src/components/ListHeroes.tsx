import HeroCard from "./HeroCard";
import { Hero } from "../App";
import { useEffect } from "react";
interface ListHeroesProps {
  heroes: Hero[];
  getNextHeroes: () => void;
}

const ListHeroes = (props: ListHeroesProps) => {
  useEffect(() => {
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
          <div className="listHeroes">
            <div>
              {props.heroes.map((hero: Hero) => (
                <HeroCard hero={hero} key={hero.id} />
              ))}
            </div>
            <div className="infoHero">
              <h2 style={{ margin: "10px" }}>Comics</h2>
              {props.heroes[0].comics.items.map((comics: { name: string }) => (
                <p
                  style={{ textAlign: "start", margin: "10px" }}
                  key={comics.name}
                >
                  • {comics.name}
                </p>
              ))}
            </div>
            <div className="infoHero">
              <h2 style={{ margin: "10px" }}>Stories</h2>
              {props.heroes[0].stories.items.map(
                (stories: { name: string }) => (
                  <p
                    style={{ textAlign: "start", margin: "10px" }}
                    key={stories.name}
                  >
                    • {stories.name}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default ListHeroes;
