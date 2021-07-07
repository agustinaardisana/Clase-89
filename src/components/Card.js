import "./Card.scss";

const Card = ({ name, shortDesc, thumbnail }) => {
  return (
    <article className="card">
      <div className="card_img">
        <img src={thumbnail}></img>
      </div>
      <div className="card_info">
        <h3>{name}</h3>
        <p>{shortDesc}</p>
        <button className="ver-mas">Ver más</button>
      </div>
    </article>
  );
};

export default Card;
