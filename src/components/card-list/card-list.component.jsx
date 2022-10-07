import CardItem from "./card-item.component";
import class_list from  './card-list.styles.module.css';


const CardList = ({monsters}) => (
  <div className={class_list.card_list}>
    {monsters.map(monster => {
      return <CardItem key={monster.id} monster={monster}/>;
    })}
  </div>
);

export default CardList;

