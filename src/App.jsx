import Cards from './components/cards';
import { useState } from 'react';
import Login from './components/login/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {user === null && <Login setUser={setUser} />}
      {user !== null && <Cards user={user} />}
    </div>
  );
}

export default App;
