import { useQuery } from '@apollo/client';
import Cards from './Cards';
import Answer from './components/answer/Answer';
import Login from './components/login/Login';

function App() {
  return (
    <div className="app">
      <Cards />
      <Login/>
      <Answer/>
    </div>
  )
}

export default App
