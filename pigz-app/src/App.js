import './App.css';
import Header from './Components/Header';
import RegistrationContent from './Page/RegistrationContent';
import PigzLogo from './Components/PigzLogo'
import FeaturesContent from './Page/FeaturesContent';
import SupportPigz from './Page/SupportContent';
import PigzListCard from './Components/PigzListCard';
import OnlinePaymentCard from './Components/OnlinePaymentCard';

function App() {
  return (
    <div className="App">
      <Header />
      <RegistrationContent />
      <PigzLogo />
      <FeaturesContent />
      <SupportPigz />
      <PigzListCard />
      <OnlinePaymentCard />
    </div>
  );
}

export default App;
