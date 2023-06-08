import { ThankYou } from './components/thank-you';
import { CardForm } from './components/card-form';
import { BankCards } from './components/bank-cards';
import './App.css';

function App() {
  const showTankYou = true;
  return (
    <div className="main main--background">
      <BankCards />
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
