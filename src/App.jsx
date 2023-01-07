import { useQuery } from '@apollo/client';
import Cards from './Cards';
import NoCard from './components/answer/NoCard';
import Login from './components/login/Login';

function App() {
  return (
    <div className="app">
      <Cards />
      <Login/>
      <NoCard/>
    </div>
  )
}

export default App
