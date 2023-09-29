const HeroCard = () => {
  return (
    <div className="HeroCard">
      <img
        style={{ width: "100%", objectFit: "contain", borderRadius: "10px" }}
        src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
        alt="car"
      />
      <h3>Hero name</h3>
      <p>Hero info</p>
    </div>
  );
};

export default HeroCard;
