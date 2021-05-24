import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import api from '../../service/api';

const PAGE_NUMBER = 0;
const PAGE_SIZE = 50;

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);

  const { id } = useParams();

  const history = useHistory();
  
  useEffect(async () => {
    try {
      const token = localStorage.getItem("@events-npds/token");
      const response = await api.get(`/events/${id}/schedule?pageNumber=${PAGE_NUMBER}&pageSize=${PAGE_SIZE}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      setSchedules(response.data);
    } catch (e) {
      console.log(e)
      alert(e.response.data.message)
    }
  }, []);

  return (
    <div>
      <header>
        <button type="button" onClick={history.pop}>Voltar para Eventos </button>
        <h1>Schedule</h1>
        <a href={`/events/${id}/schedule/new`}>Criar nova Programação</a>
      </header>
      <ul>
        {
          schedules.map(schedule =>
            <li key={schedule.id}>
              {schedule.name}
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default Schedule;