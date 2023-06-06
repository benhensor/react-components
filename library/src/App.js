import './App.css';
import GlassCard from './components/GlassFX/GlassCard';
import FrostedGlass from './components/FrostedGlass/FrostedGlass';
import cards from './components/GlassFX/data'
import SpreadCards from './components/SpreadCards/SpreadCards';

function App() {

  return (
    <main className="App">
      {cards.map((card, index) => (
        <GlassCard key={index} number={card.number} title={card.title} body={card.body} link={card.link} />
      ))}
      <FrostedGlass />
      <SpreadCards />

    </main>
  );
}

export default App;
