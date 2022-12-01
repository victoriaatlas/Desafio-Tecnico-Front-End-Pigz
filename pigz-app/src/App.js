import '../src/Styles/App.css';
import Header from './Components/Header';
import RegistrationContent from './Page/RegistrationContent';
import FeaturesContent from './Page/FeaturesContent';
import SupportPigz from './Page/SupportContent';
import PigzListCard from './Components/PigzListCard';
import OnlinePaymentCard from './Components/OnlinePaymentCard';
import NumberContact from './Components/NumberContact';
import ContactFooterContent from './Page/ContactFooterContent';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <RegistrationContent />
        <FeaturesContent />
        <SupportPigz />
        <PigzListCard />
        <OnlinePaymentCard />
        <NumberContact />
      </main>
      <footer>
        <ContactFooterContent />
      </footer>
    </div>
  );
}

export default App;
