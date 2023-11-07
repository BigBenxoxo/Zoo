const Card = (props) => {
  return (
    <div className="card">
      <span class="material-symbols-outlined">close</span>
      <p id="cardName">{props.name}</p>
      <img src="https://source.unsplash.com/400x400/?fox" alt="picture" />
      <p id="cardLikes">
        <span class="material-symbols-outlined">thumb_up</span>
        Placeholder for likes
        <span class="material-symbols-outlined">thumb_down</span>
      </p>
    </div>
  );
};

export default Card;
