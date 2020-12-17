import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import GreetPerson from './components/GreetPerson';
import GreetTeam from './components/GreetTeam'
import Subscribe from './components/Subscribe';
import Counter from './components/Counter';
import TeamDetailsTable from './components/TeamDetailsTable';

function App() {
  const team = [
    {
      empId : 1001,
      empName : "Sam",
      location : "Chennai"
    },
    {
      empId : 1002,
      empName : "Anitha",
      location : "Chennai"
    },
    {
      empId : 1003,
      empName : "Priya",
      location : "Hyderabad"
    }
  ]

  return (
    <div className="App">
      <Greet/>
      <GreetPerson name = "Clark"/>
      <GreetTeam/>
      <Subscribe/>
      <Counter/>
      <TeamDetailsTable team = {team}></TeamDetailsTable>
    </div>
  );
}

export default App;
