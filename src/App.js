import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BudgetItem from './BudgetItem';
import DollarItem from './DollarItem';
import Budget from './Budget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BudgetItem/>
        <DollarItem/> */}
        <Budget></Budget>
      </header>
    </div>
  );
}

export default App;
