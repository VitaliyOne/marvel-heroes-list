const HeroCard = (props) => {
  const img = `${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`;
  return (
    <div className="HeroCard">
      <img
        style={{
          width: "250px",
          objectFit: "contain",
          borderRadius: "10px",
        }}
        src={img}
        alt="Hero image"
      />
      <h3>{props.hero.name}</h3>
      <p>{props.hero.description}</p>
    </div>
  );
};

export default HeroCard;
