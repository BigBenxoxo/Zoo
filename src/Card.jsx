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
        <button onClick={props.removeLikes}>
          <span className="material-symbols-outlined">heart_minus</span>
        </button>
        <div className="likes_container">
          <p className="likes">{props.likes}</p>
          <span className="material-icons">
            {props.likes >= 0 ? "favorite" : "heart_broken"}
          </span>
        </div>
        <p>{props.fox}</p>
        <button onClick={props.addLikes}>
          <span className="material-symbols-outlined">heart_plus</span>
        </button>
      </div>
      ;
    </div>
  );
};

export default Card;

// Copy
