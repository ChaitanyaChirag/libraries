  
import Login from './Login/Login'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import App from './App'
import PopChart from './Dashboard/PopChart'
export default function Main() {

    return (
      <div>
        <Router>
          <Switch>
          <Route path ="/" exact  component={Login}/>
          <Route path ="/chart" component={PopChart}/>
        <Route path ="/dashboard"  component={App}/>
        </Switch>
        </Router>
      </div>
    );
  }