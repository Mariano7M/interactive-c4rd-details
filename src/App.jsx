import { ThankYou } from './components/thank-you';
import { CardForm } from './components/card-form';
import { BankCards } from './components/bank-cards';
import './App.css';
import { CardDetailsProvider } from './state/CardDetailsContext';

function App() {
  const showTankYou = false;
  return (
    <div className="main main--background">
      <CardDetailsProvider>
        <div>
          <BankCards />
        </div>
        {!showTankYou && (
          <section className="main__form">
            <CardForm />
          </section>
        )}
      </CardDetailsProvider>
      {showTankYou && (
        <section className="main__thankyou-wrap">
          <ThankYou />
        </section>
      )}
    </div>
  );
}

export default App;
