import { useEffect, useState } from "react";
import "./App.css";
import Dice from "./components/Dice";

const ROLL_MS = 3000;

export default function App() {
  const [playerName, setPlayerName] = useState("Player 1");
  const [rolling, setRolling] = useState(false);
  const [dice, setDice] = useState({ p1: 1, p2: 1 });
  const [result, setResult] = useState({
    text: "Hazır mısın? 🎲",
    status: "idle",
  });
  const [hasPlayed, setHasPlayed] = useState(false);

  // ---- isim kalıcı kalsın
  useEffect(() => {
    const saved = localStorage.getItem("dice:p1name");
    if (saved) setPlayerName(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("dice:p1name", playerName);
  }, [playerName]);

  const rollDice = () => {
    if (rolling) return;
    setRolling(true);
    setHasPlayed(true);
    setResult({ text: "Zarlar atılıyor...", status: "pending" });

    // hızlı yüz değiştirme (spin)
    const spin = setInterval(() => {
      setDice({
        p1: Math.floor(Math.random() * 6) + 1,
        p2: Math.floor(Math.random() * 6) + 1,
      });
    }, 90);

    // gerçek sonuç
    setTimeout(() => {
      clearInterval(spin);
      const p1 = Math.floor(Math.random() * 6) + 1;
      const p2 = Math.floor(Math.random() * 6) + 1;
      setDice({ p1, p2 });

      if (p1 > p2)
        setResult({ text: `${playerName} kazandı! 🏆`, status: "win" });
      else if (p2 > p1) setResult({ text: "PC kazandı! 💻", status: "lose" });
      else setResult({ text: "Berabere! 🤝", status: "draw" });

      setRolling(false);
    }, ROLL_MS);
  };

  const editName = () => {
    const newName = prompt("Yeni adını gir:", playerName);
    if (newName && newName.trim()) setPlayerName(newName.trim());
  };

  return (
    <div className="app">
      <h1 className="title">Dice Game 🎲</h1>

      <div className="players">
        <div className="player">
          <h2>
            {playerName}{" "}
            <button
              className="edit-btn"
              onClick={editName}
              title="İsmi düzenle"
            >
              ✏️
            </button>
          </h2>
          <Dice number={dice.p1} rolling={rolling} />
        </div>

        <div className="player">
          <h2>Player 2 (PC)</h2>
          <Dice number={dice.p2} rolling={rolling} />
        </div>
      </div>

      <p className={`result ${result.status}`}>{result.text}</p>

      <button onClick={rollDice} disabled={rolling} className="roll-btn">
        {rolling ? "Atılıyor..." : hasPlayed ? "Tekrar At 🎲" : "Zar At 🎲"}
      </button>
    </div>
  );
}
