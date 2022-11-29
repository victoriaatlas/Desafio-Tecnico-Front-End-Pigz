import './App.css';
import Header from './Components/Header';
import RegistrationContent from './Page/RegistrationContent';
import PigzLogo from './Components/PigzLogo'
import FeaturesContent from './Page/FeaturesContent';

function App() {
  return (
    <div className="App">
      <Header />
      <RegistrationContent />
      <PigzLogo />
      <FeaturesContent />
    </div>
  );
}

export default App;
