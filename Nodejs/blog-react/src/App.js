import { Route, HashRouter } from 'react-router-dom'
import Index from './view/index'
import Login from './view/login'

function App() {
  return (
    <div>
      <HashRouter>
        <Route path='/' exact component={Index} />
        <Route path='/login' exact component={Login} />
      </HashRouter>
    </div>
  );
}

export default App;
