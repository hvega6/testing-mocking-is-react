import logo from './logo.svg';
import './App.css';
import FeedbackForm from './FeedbackForm';

function App() {

  const handleSubmit = () => {
    console.log('Form submitted!')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href='https://susiessalad.com' className='App-link'>
          Susies' Salad S-bar
        </a>
        <FeedbackForm onSubmit={handleSubmit}/>
      </header>
    </div>
  );
}

export default App;
