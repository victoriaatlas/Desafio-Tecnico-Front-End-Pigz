import './App.css';
import Header from './Components/Header';
import RegistrationContent from './Page/RegistrationContent';
import PigzLogo from './Components/PigzLogo'
import FeaturesContent from './Page/FeaturesContent';
import SupportPigz from './Page/SupportContent';
import PigzListCard from './Components/PigzListCard';
import OnlinePaymentCard from './Components/OnlinePaymentCard';
import NumberContact from './Components/NumberContact';
import ContactFooterContent from './Page/ContactFooterContent';

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
      <NumberContact />
      <ContactFooterContent />
    </div>
  );
}

export default App;
