import { useState, useEffect } from 'react'

import api from '../../service/api'

import '../../global.css';
import Header from '../../components/Header/index';
import ListItem from '../../components/ListItem';

const Events = () => {
  const [events, setEvents] = useState([]);

  const PAGE_NUMBER = 0;
  const PAGE_SIZE = 50;

  const getEvents = async () => {
    try {
      const token = localStorage.getItem("@events-npds/token");
      const response = await api.get(`/events?pageNumber=${PAGE_NUMBER}&pageSize=${PAGE_SIZE}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
      setEvents(response.data);
    } catch (e) {
      console.log(e)
      alert(e.response.data.message)
    }
  }

  useEffect(() => {
    getEvents();
  }, [])

  return (
    <div className="container">
      <Header title="Eventos" link="/events/new" />

      <main>
        <div />
        <dl className="list">
          {events.map(event => <ListItem key={event.id} item={event} isEvent={true} />)}
        </dl>
        <div />

      </main>
    </div>
  )
}

export default Events;