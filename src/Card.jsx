const Card = (props) => {
  return (
    <div className="card">
      <button onClick={props.click} className="material-symbols-outlined">
        Close
      </button>

      <img
        src={`https://source.unsplash.com/400x400/?${props.name}`}
        alt="picture"
      />
      <p id="cardName">{props.name}</p>
      <p id="cardLikes">
        <span className="material-symbols-outlined">thumb_up</span>
        Placeholder for likes
        <span className="material-symbols-outlined">thumb_down</span>
      </p>
    </div>
  );
};

export default Card;
