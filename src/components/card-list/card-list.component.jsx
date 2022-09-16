import CardItem from "./card-item.component";
import "./card-list.styles.css";


const CardList = ({monsters}) => (
  <div className="card-list">
    {monsters.map(monster => {
      return <CardItem key={monster.id} monster={monster}/>;
    })};
  </div>
);

export default CardList;

