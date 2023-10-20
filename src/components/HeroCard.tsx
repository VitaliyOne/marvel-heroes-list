import { Hero } from "../App";

interface HeroCardProps {
  hero: Hero;
  heroes: Hero[];
  clickHeroCard: (name: string) => void;
  numberHero?: number;
}

const HeroCard = (props: HeroCardProps) => {
  const img = `${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`;
  return (
    <div className="HeroCard">
      <img
        className="imageHeroCard"
        src={img}
        alt="Hero image"
        onClick={() => props.clickHeroCard(props.hero.name)}
      />
      <h1>{props.hero.name}</h1>
      {props.heroes.length === 1 ? <h3>{props.hero.description}</h3> : ""}
    </div>
  );
};

export default HeroCard;
