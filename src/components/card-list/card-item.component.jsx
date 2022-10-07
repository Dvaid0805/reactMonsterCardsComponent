import class_item from './card-list.styles.module.css';

const CardItem = ({monster: {id, name, email}}) => (
  <div className={class_item.card_container}>
    <img
      src={`https://robohash.org/${id+40}?set=set2&size=180x180`}
      alt={`monster ${name}`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default CardItem;