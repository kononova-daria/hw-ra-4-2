import './App.css';
import AccountingWalks from './components/AccountingWalks';

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <AccountingWalks/>
      </div>
    </div>
  );
}

export default App;
