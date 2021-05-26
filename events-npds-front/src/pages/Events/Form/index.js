import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../../service/api'
import Header from '../../../components/Header';
import FooterForm from '../../../components/FooterForm';

const EventForm = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [localization, setLocalization] = useState("");
  const [beginDate, setBeginDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const history = useHistory();

  function areFieldsValid() {
    return name.length > 3 &&
      description.length > 3 &&
      organizer.length > 3 &&
      localization.length > 3;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!areFieldsValid()) {
      alert('Campos Inválidos');
      return;
    }

    try {
      await api.post("/events", {
        name,
        description,
        organizer,
        localization,
        beginDate,
        endDate
      });
      history.push("/home")
    } catch (e) {
      console.log(e)
      alert(e.response.data.message)
    }
  }

  return (
    <div className="container">
      <Header title="Eventos" />

      <main>
        <div></div>
        <form className="form" onSubmit={handleSubmit} >
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoFocus />

          <label>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

          <label>Organizer</label>
          <input type="text" value={organizer} onChange={(e) => setOrganizer(e.target.value)} />

          <label>Localization</label>
          <input type="text" value={localization} onChange={(e) => setLocalization(e.target.value)} />

          <label>Begin Date</label>
          <input type="date" value={beginDate} onChange={(e) => setBeginDate(e.target.value)} />

          <label>End Date</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

          <FooterForm areFieldsValid={areFieldsValid} />
        </form>
        <div></div>
      </main>
    </div>
  )
}

export default EventForm;