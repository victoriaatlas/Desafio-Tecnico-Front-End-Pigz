import './App.css';
import Header from './Components/Header';
import MainScreen from './Page/MainScreen';
import PigzLogo from './Components/PigzLogo'
import AboutApp from './Page/AboutApp';

function App() {
  return (
    <div className="App">
      <Header />
      <MainScreen />
      <PigzLogo />
      <AboutApp />
    </div>
  );
}

export default App;
