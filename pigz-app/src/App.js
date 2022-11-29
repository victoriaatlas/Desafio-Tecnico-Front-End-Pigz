import './App.css';
import Header from './Components/Header';
import RegistrationContent from './Page/RegistrationContent';
import PigzLogo from './Components/PigzLogo'
import AboutApp from './Page/FeaturesContent';

function App() {
  return (
    <div className="App">
      <Header />
      <RegistrationContent />
      <PigzLogo />
      <AboutApp />
    </div>
  );
}

export default App;
