import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import api from '../../service/api';
import Header from "../../components/Header/index";
import ListItem from "../../components/ListItem";

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
    <div className="container">
      <Header title="Schedule" link={`/events/${id}/schedule/new`} />
      
      <dl className="list">
        { schedules.map(schedule => <ListItem item={schedule} /> ) }
      </dl>
    </div>
  );
}

export default Schedule;