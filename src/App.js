import './App.css';
import { useQuery } from '@apollo/client';
import { Token } from './queries/Token';

const App = () => {
  const { loading, error, data } = useQuery(Token);

  if (loading) return "Loading";
  if (error) return `Error! ${error.message}`;

  console.log(data)

    return (
      <div>
      <h1>Data</h1>
      </div>
    );
  };

export default App;
