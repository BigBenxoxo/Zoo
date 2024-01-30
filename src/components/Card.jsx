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
      <div className="card_desc">
        <button className="btnminus" onClick={props.removeLikes}>
          <span className="material-symbols-outlined">heart_minus</span>
        </button>
        <div className="likes_container">
          <p className="likes">{props.likes}</p>
        </div>
        <p>{props.fox}</p>
        <button className="btnplus" onClick={props.addLikes}>
          <span className="material-symbols-outlined">heart_plus</span>
        </button>
      </div>
    </div>
  );
};

export default Card;

// Copy
