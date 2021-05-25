import { Link } from 'react-router-dom';

import './index.css';

const ListItem = ({ item, isEvent = false }) => {
  return (
    <>
      <dt key={item.id} title={item.description}>
        {isEvent
          ? <Link to={`/events/${item.id}/schedule`}>
            {item.name}
          </Link>
          : <b>{item.name}</b>
        }
      </dt>

      <dd>
        Inicia: {new Date(item.beginDate).toLocaleDateString()}
        {!isEvent && (<span> - { item.beginTime}</span>)}
      </dd>
      <dd>
        Encerra: {new Date(item.endDate).toLocaleDateString()}
        {!isEvent && (<span> - { item.beginTime}</span>)}
      </dd>
    </>
  );
}

export default ListItem;