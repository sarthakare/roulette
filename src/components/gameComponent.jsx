import React from "react";
import RouletteBg from "../assets/images/RouletteBg.png";
import Roulli from "../assets/images/Roulli.svg";
import RoulettePin from "../assets/images/RoulettePin.svg";
import chipOrange from "../assets/images/chip_orange.png";
import chipYellow from "../assets/images/chip_yellow.png";
import chipGreen from "../assets/images/chip_green.png";
import chipBlue from "../assets/images/chip_blue.png";
import chipPurple from "../assets/images/chip_purple.png";
import chipPink from "../assets/images/chip_pink.png";

import crownImg from "../assets/images/crown.png";
import newRoundImg from "../assets/images/New_Round.svg";
import RouletteTable from "./RouletteTable";

const numberOrder = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

const numberAngleMap = {};
const anglePerSlot = 360 / 37;

numberOrder.forEach((num, index) => {
  numberAngleMap[num] = index * anglePerSlot;
});

const initialChips = [
  { img: chipOrange, value: 10, label: "10" },
  { img: chipYellow, value: 100, label: "100" },
  { img: chipGreen, value: 500, label: "500" },
  { img: chipBlue, value: 1000, label: "1K" },
  { img: chipPurple, value: 5000, label: "5K" },
  { img: chipPink, value: 10000, label: "10K" },
];

const GameComponent = () => {
  const [timer, setTimer] = React.useState(30);
  const [targetNumber, setTargetNumber] = React.useState(16); // Example desired number
  const [rotation, setRotation] = React.useState(0);
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [showWinner, setShowWinner] = React.useState(false);
  const [showNewRound, setShowNewRound] = React.useState(false);
  const [showPlaceBet, setShowPlaceBet] = React.useState(false);
  const [selectedChip, setSelectedChip] = React.useState(initialChips[0]);
  const [bets, setBets] = React.useState([]); // {number, amount}
  const [lastWin, setLastWin] = React.useState(0);
  const [rebetCache, setRebetCache] = React.useState([]);

  // Handle timer and round transitions
  React.useEffect(() => {
    let spinTimeout;
    let winnerTimeout;
    let newRoundTimeout;
    let placeBetTimeout;

    if (timer > 0) {
      setShowPlaceBet(false);
      setShowNewRound(false);
      setBettingOpen(true);
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setBettingOpen(false);
      setRebetCache(bets);
      setIsSpinning(true);
      setShowWinner(false);
      setShowPlaceBet(false);
      setShowNewRound(false);

      // Simulate spinning and then stop at the desired angle
      // Gradual stop: use more spins and ease-out
      const extraSpins = 10 + Math.floor(Math.random() * 3); // 10-12 full spins
      const targetAngle = 360 * extraSpins + (360 - numberAngleMap[targetNumber]);
      setTimeout(() => {
        setRotation(targetAngle);
      }, 50);

      // End spin state after animation (longer duration for more spins)
      spinTimeout = setTimeout(() => {
        setIsSpinning(false);
        setShowWinner(true);
        // Calculate win
        const betOnWin = bets.find((b) => b.number === targetNumber);
        const winAmount = betOnWin ? betOnWin.amount * 36 : 0;
        setLastWin(winAmount);
        // After 3s, hide winner, show new round for 3s, then show place bet
        winnerTimeout = setTimeout(() => {
          setShowWinner(false);
          setShowNewRound(true);
          // After 3s, hide new round, show place bet
          newRoundTimeout = setTimeout(() => {
            setShowNewRound(false);
            setShowPlaceBet(true);
            // After 3s, reset for next round (show timer again)
            placeBetTimeout = setTimeout(() => {
              setShowPlaceBet(false);
              setRotation(0); // Reset roulette image to original position
              setTimer(30);
              setBets([]); // Clear bets for new round
              setBettingOpen(true);
              setTargetNumber(
                numberOrder[Math.floor(Math.random() * numberOrder.length)]
              );
            }, 3000);
          }, 3000);
        }, 3000);
      }, 6000); // match longer transition duration
    }

    return () => {
      clearTimeout(spinTimeout);
      clearTimeout(winnerTimeout);
      clearTimeout(newRoundTimeout);
      clearTimeout(placeBetTimeout);
    };
  }, [timer, targetNumber, bets]);

  // Betting logic
  const totalBet = bets.reduce((sum, b) => sum + b.amount, 0);

  // Place or increase bet
  const [bettingOpen, setBettingOpen] = React.useState(true);
  const handlePlaceBet = (number) => {
    if (!bettingOpen) return;
    setBets((prev) => {
      const idx = prev.findIndex((b) => b.number === number);
      if (idx !== -1) {
        // Increase bet
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          amount: updated[idx].amount + selectedChip.value,
        };
        return updated;
      } else {
        // New bet
        return [...prev, { number, amount: selectedChip.value }];
      }
    });
  };

  // Remove all bets
  const handleRemove = () => setBets([]);
  // Undo last bet
  const handleUndo = () => setBets((prev) => prev.slice(0, -1));
  // Double all bets
  const handleDouble = () =>
    setBets((prev) => prev.map((b) => ({ ...b, amount: b.amount * 2 })));
  // Rebet previous bets
  const handleRebet = () => setBets(rebetCache);

  return (
    <div className="flex flex-col w-full h-full">
      {/* Top Bar */}
      <div className="bg-[#2c3b4d] text-white flex items-center px-4 py-2 text-lg font-bold">
        <span className="mr-2">
          V-AUTO ROULETTE{" "}
          <span className="text-blue-300 text-xs font-normal underline cursor-pointer ml-1">
            Rules
          </span>
        </span>
        <span className="ml-auto text-xs font-normal">
          Round ID: VRT11752029433 | Player History
        </span>
      </div>

      {/* Wheel Area */}
      <div className="flex-1 flex flex-col bg-transparent min-h-[600px] items-center justify-center">
        <div className="flex flex-1 relative items-center justify-center w-full">
          <div
            className="relative flex items-center justify-center w-full h-full"
            style={{
              backgroundImage: `url('${RouletteBg}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
              {/* Pin */}
              <img
                src={RoulettePin}
                alt="Roulette Pin"
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 z-20 -rotate-90"
                draggable={false}
              />

              {/* Spinning Wheel */}
              <img
                src={Roulli}
                alt="Roulette Wheel"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: isSpinning ? "transform 4s ease-out" : "none",
                }}
                className="w-full h-full object-contain drop-shadow-lg relative z-10"
                draggable={false}
              />
            </div>
            {/* Winner Crown and Number */}
            {showWinner && (
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-0 mb-4 flex items-center px-12 py-6 rounded-2xl z-10"
                style={{
                  background: "rgba(20,20,20,0.92)",
                  boxShadow: "0 4px 24px 0 rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={crownImg}
                  alt="Winner"
                  className="w-20 h-20 mr-6 drop-shadow-lg"
                />
                <span
                  className="text-6xl font-extrabold"
                  style={{ color: "#FFD700", textShadow: "0 4px 16px #000" }}
                >
                  {targetNumber}
                </span>
              </div>
            )}
            {/* New Round Image */}
            {showNewRound && (
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-0 mb-4 flex flex-col items-center px-12 py-6 rounded-2xl z-10"
                style={{
                  background: "rgba(20,20,20,0.92)",
                  boxShadow: "0 4px 24px 0 rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={newRoundImg}
                  alt="New Round"
                  className="w-1/2 h-1/2 object-contain drop-shadow-lg"
                />
              </div>
            )}
            {/* Place Bet Text */}
            {showPlaceBet && (
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-0 mb-4 flex flex-col items-center px-12 py-6 rounded-2xl z-10"
                style={{
                  background: "rgba(20,20,20,0.92)",
                  boxShadow: "0 4px 24px 0 rgba(0,0,0,0.5)",
                }}
              >
                <span
                  className="text-4xl font-extrabold text-white tracking-wider mb-2"
                  style={{ letterSpacing: "0.1em" }}
                >
                  Place your bet!
                </span>
                <span className="text-2xl font-semibold text-gray-200">
                  Placed bets
                </span>
              </div>
            )}
          </div>

          {/* Timer */}
          {!showPlaceBet && !showNewRound && (
            <div className="absolute bottom-8 right-8 flex space-x-2">
              <div className="w-20 h-20 bg-[#22304d] text-white rounded-lg flex flex-col items-center justify-center text-4xl font-bold border-4 border-blue-400 shadow-lg">
                <span>{timer}</span>
                <span className="text-xs font-normal mt-1">sec</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Betting Area */}
      <div className="w-full bg-[#55585b] text-white rounded-b-lg shadow-lg px-6 py-4 flex flex-col items-center mt-0">
        <div className="w-full flex flex-row items-center justify-between mb-4">
          <div>
            <div className="text-base font-semibold">
              Total Bet : {totalBet}
            </div>
            <div className="text-xs font-normal">
              Min Bet: 10 | Max Bet:10000
            </div>
          </div>
          <div className="flex flex-row space-x-8">
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">Remove</span>
              <button
                onClick={handleRemove}
                className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center shadow-lg mt-1 hover:bg-[#333] transition"
              >
                <span className="text-2xl">✖</span>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">Rebet</span>
              <button
                onClick={handleRebet}
                className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center shadow-lg mt-1 hover:bg-[#333] transition"
              >
                <span className="text-2xl">⟳</span>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">Undo</span>
              <button
                onClick={handleUndo}
                className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center shadow-lg mt-1 hover:bg-[#333] transition"
              >
                <span className="text-2xl">↩</span>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">Double</span>
              <button
                onClick={handleDouble}
                className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center shadow-lg mt-1 hover:bg-[#333] transition"
              >
                <span className="text-lg font-bold">2X</span>
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="text-base font-semibold">Last Win : {lastWin}</div>
          </div>
        </div>
        {/* Chips Row */}
        <div className="flex flex-row items-center justify-center space-x-8 mt-2">
          {initialChips.map((chip) => (
            <div
              key={chip.value}
              className={`relative w-16 h-16 flex items-center justify-center cursor-pointer transition-transform drop-shadow-lg group ${
                selectedChip.value === chip.value
                  ? "ring-4 ring-yellow-400 scale-105 z-10"
                  : "hover:scale-105"
              }`}
              onClick={() => setSelectedChip(chip)}
            >
              <img src={chip.img} alt={chip.label} className="w-16 h-16" />
              <span
                className="absolute text-white font-bold select-none transition-all duration-200 text-lg"
                style={{ textShadow: "0 2px 8px #000" }}
              >
                {chip.label}
              </span>
            </div>
          ))}
        </div>

        {/* Roulette Table */}
        <RouletteTable bets={bets} onPlaceBet={handlePlaceBet} bettingOpen={bettingOpen} />
      </div>
    </div>
  );
};

export default GameComponent;
