import { useState } from 'react'
import api from '../../../service/api'
import { useHistory, useParams } from 'react-router-dom';

const ScheduleForm = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [presenter, setPresenter] = useState("");
  const [beginDate, setBeginDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [beginTime, setBeginTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [workload, setWorkload] = useState(2);

  const history = useHistory();

  function areFieldsValid() {
    return name.length > 3 && 
      description.length > 3 && 
      presenter.length > 3 && 
      beginTime.length == 8 && 
      endTime.length == 8 && 
      workload > 0;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if(!areFieldsValid) {
      alert("Campos inválidos");
    }
    try {
      await api.post(`/events/${id}/schedule`, {
        name,
        description,
        presenter,
        beginDate,
        endDate,
        beginTime,
        endTime,
        workload
      });
      history.pop();
    } catch (e) {
      console.log(e)
      alert(e.response.data.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: "#333", display: "flex", flex: 1, height: "100vh", padding: "20px" }}>
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Description</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label>Presenter</label>
      <input type="text" value={presenter} onChange={(e) => setPresenter(e.target.value)} />

      <label>Begin Date</label>
      <input type="date" value={beginDate} onChange={(e) => setBeginDate(e.target.value)} />

      <label>End Date</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

      <label>Begin Time</label>
      <input type="time" value={beginTime} onChange={(e) => setBeginTime(e.target.value)} />

      <label>End Time</label>
      <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />

      <label>Workload</label>
      <input type="number" value={workload} onChange={(e) => setWorkload(e.target.value)} />

      <button type="submit">Salvar</button>
    </form>
  )
}

export default ScheduleForm;