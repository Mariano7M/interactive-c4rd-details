import { BackBankCard } from './back-bank-card';
import { FrontBankCard } from './front-bank-card';
import './bank-cards.css';
export function BankCards() {
  return (
    <section className="bank-cards">
      <FrontBankCard />
      <BackBankCard />
    </section>
  );
}
