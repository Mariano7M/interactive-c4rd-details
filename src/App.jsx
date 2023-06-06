import { ThankYou } from './components/thank-you';
import { CardForm } from './components/card-form';
import { BankCards } from './components/bank-cards';
import './App.css';

function App() {
  const showTankYou = false;
  return (
    <div className="main main--background">
      <BankCards />
      <section className="main__form">
        <CardForm />
      </section>
      {showTankYou && <ThankYou />}
    </div>
  );
}

export default App;
