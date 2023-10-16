import { Hero } from "../App";

interface HeroCardProps {
  hero: Hero;
}

const HeroCard = (props: HeroCardProps) => {
  const img = `${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`;
  return (
    <div className="HeroCard">
      <img className="imageHeroCard" src={img} alt="Hero image" />
      <h3>{props.hero.name}</h3>
    </div>
  );
};

export default HeroCard;
