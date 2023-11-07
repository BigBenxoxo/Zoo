const Card = () => {
  return (
    <div className="card">
      <img src="https://source.unsplash.com/random" alt="unsplash random image" />
      <h2>Title</h2>
      <button>close</button>
      <button>-</button>
      <span className="material-symbols-outlined">mood</span>
      <button>+</button>
    </div>
  );
};

export default Card;
