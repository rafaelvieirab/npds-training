import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import api from '../../service/api';
import Header from '../../components/Header/index';
import ListItem from '../../components/ListItem';

const PAGE_NUMBER = 0;
const PAGE_SIZE = 50;

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);

  const { id } = useParams();

  useEffect(async () => {
    try {
      const token = localStorage.getItem('@events-npds/token');
      const response = await api.get(`/events/${id}/schedule?pageNumber=${PAGE_NUMBER}&pageSize=${PAGE_SIZE}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      setSchedules(response.data);
    } catch (e) {
      alert(e.response.data.message);
    }
  }, []);

  return (
    <div className="container">
      <Header title="Schedule" link={`/events/${id}/schedule/new`} />

      <main>
        <div />
        {
          schedules.length === 0
            ? (
              <div className="list">
                <p>Não há nenhuma programação cadastrada para este evento.</p>
              </div>
            )
            : (
              <ul className="list">
                {schedules.map(schedule => <ListItem key={schedule.id} item={schedule} />)}
              </ul>
            )
        }
        <div />
      </main>
    </div>
  );
}

export default Schedule;