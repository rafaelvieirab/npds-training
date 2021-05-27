import { Link } from 'react-router-dom';

import './index.css';

const ListItem = ({ item, isEvent = false }) => {
  return (
    <li className="item-list">
      <p key={item.id} title={item.description}>
        {isEvent
          ? <Link to={`/events/${item.id}/schedule`}>
            {item.name}
          </Link>
          : <b>{item.name}</b>
        }
      </p>

      <ul>
        <li>
          Inicia: {new Date(item.beginDate).toLocaleDateString()}
          {!isEvent && (<span> - { item.beginTime}</span>)}
        </li>
        <li>
          Encerra: {new Date(item.endDate).toLocaleDateString()}
          {!isEvent && (<span> - { item.beginTime}</span>)}
        </li>
      </ul>
    </li>
  );
}

export default ListItem;