import { ThankYou } from './components/thank-you';
import { CardForm } from './components/card-form';
import { BankCards } from './components/bank-cards';
import './App.css';
import { useCardDetails } from './hooks/card-details.hooks';

function App() {
  const cardDetails = useCardDetails();
  const showTankYou = cardDetails.isCardCompleted;

  return (
    <div className="main main--background">
      <div>
        <BankCards />
      </div>
      {!showTankYou && (
        <section className="main__form">
          <CardForm />
        </section>
      )}
      {showTankYou && (
        <section className="main__thankyou-wrap">
          <ThankYou />
        </section>
      )}
    </div>
  );
}

export default App;
