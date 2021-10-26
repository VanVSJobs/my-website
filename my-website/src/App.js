import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Landing from './pages/landing/landing.component';
import Education from './pages/education/education.component';
import Experience from './pages/experience/experience.component';
import Projects from './pages/projects/projects.component';
import About from './pages/about-me/about-me.component';
import Contact from './pages/contact/contact.component';
import './App.css';

function App() {
  return (
    <div className='main'>
      <Header />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/education' component={Education} />
        <Route exact path='/experience' component={Experience} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
