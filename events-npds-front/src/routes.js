import {BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './pages/Login'
import Events from './pages/Events'
import EventsForm from './pages/Events/Form'
import Schedule from './pages/Schedule';
import ScheduleForm from './pages/Schedule/Form';

const Routes = () => (
  <Router>
    <Route exact path="/login">
      <Login/>
    </Route>
    <Route exact path="/home">
      <Events/>
    </Route>
    <Route exact path="/events/new">
      <EventsForm/>
    </Route>
    <Route exact path="/events/:id/schedule">
      <Schedule/>
    </Route>
    <Route exact path="/events/:id/schedule/new">
      <ScheduleForm/>
    </Route>
  </Router>
)

export default Routes;