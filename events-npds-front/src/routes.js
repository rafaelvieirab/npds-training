import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import Login from './pages/Login'
import Events from './pages/Events'
import EventsForm from './pages/Events/Form'
import Schedule from './pages/Schedule';
import ScheduleForm from './pages/Schedule/Form';

function isAuthenticate() {
  return localStorage.getItem('@events-npds/token') !== '';
}

const PublicRoute = (({ children, ...rest }) => {
  return (
    isAuthenticate()
      ? (<Redirect to="/home" />)
      : (<Route {...rest} > { children}</Route >)
  );
});

const PrivateRoute = (({ children, ...rest }) => {
  return (
    isAuthenticate()
      ? (<Route {...rest} > {children}</Route >)
      : (<Redirect to="/login" />)
  );
});

const Routes = () => (
  <Router>
    <PublicRoute exact path="/login">
      <Login />
    </PublicRoute>

    <PrivateRoute exact path="/home">
      <Events />
    </PrivateRoute>

    <PrivateRoute exact path="/events/new">
      <EventsForm />
    </PrivateRoute>

    <PrivateRoute exact path="/events/:id/schedule">
      <Schedule />
    </PrivateRoute>

    <PrivateRoute exact path="/events/:id/schedule/new">
      <ScheduleForm />
    </PrivateRoute>
  </Router>
);

export default Routes;