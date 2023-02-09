import { Route, Routes } from "react-router-dom";
import Memotest from "./screens/Memotest";
import PokemonQuiz from "./screens/PokemonQuiz";
import FastWords from "./screens/FastWords";

function App() {
  return (
    <Routes>
      <Route path="/memotest" element={<Memotest />} />
      <Route path="/pokemonquiz" element={<PokemonQuiz />} />
      <Route path="/fastwords" element={<FastWords />} />
    </Routes>
  );
}

export default App;
