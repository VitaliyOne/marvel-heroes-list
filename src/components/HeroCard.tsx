import { Hero } from "../App";

interface HeroCardProps {
  hero: Hero;
}

const HeroCard = (props: HeroCardProps) => {
  const img = `${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`;
  return (
    <div className="HeroCard">
      <img className="imageHeroCard" src={img} alt="Hero image" />
      <h1 style={{ fontSize: "18px", margin: "5px" }}>{props.hero.name}</h1>
      {props.hero.description !== "" ? (
        <h3
          style={{
            fontSize: "15px",
            margin: "0 15px 0 15px",
            paddingBottom: "10px",
            textAlign: "justify",
          }}
        >
          {props.hero.description}
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeroCard;
