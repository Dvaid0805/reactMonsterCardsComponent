const CardItem = ({monster: {id, name, email}}) => (
  <div className="card-container">
    <img
      className="card-img"
      src={`https://robohash.org/${id+40}?set=set2&size=180x180`}
      alt={`monster ${name}`}
    />
    <h2 className="card-title">{name}</h2>
    <p className="card-email">{email}</p>
  </div>
);

export default CardItem;