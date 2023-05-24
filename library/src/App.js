import './App.css';
import GlassCard from './components/GlassFX/GlassCard';
import cards from './components/GlassFX/data'

function App() {

  return (
    <main className="App">
      {cards.map((card, index) => (
        <GlassCard key={index} number={card.number} title={card.title} body={card.body} link={card.link} />
      ))}
          
    </main>
  );
}

export default App;
