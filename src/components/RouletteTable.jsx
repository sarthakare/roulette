const colors = {
  0: "bg-green-600",
  1: "bg-red-600",
  2: "bg-black",
  3: "bg-red-600",
  4: "bg-black",
  5: "bg-red-600",
  6: "bg-black",
  7: "bg-red-600",
  8: "bg-black",
  9: "bg-red-600",
  10: "bg-black",
  11: "bg-black",
  12: "bg-red-600",
  13: "bg-black",
  14: "bg-red-600",
  15: "bg-black",
  16: "bg-red-600",
  17: "bg-black",
  18: "bg-red-600",
  19: "bg-red-600",
  20: "bg-black",
  21: "bg-red-600",
  22: "bg-black",
  23: "bg-red-600",
  24: "bg-black",
  25: "bg-red-600",
  26: "bg-black",
  27: "bg-red-600",
  28: "bg-black",
  29: "bg-black",
  30: "bg-red-600",
  31: "bg-black",
  32: "bg-red-600",
  33: "bg-black",
  34: "bg-red-600",
  35: "bg-black",
  36: "bg-red-600",
};

const RouletteTable = ({ bets = [], onPlaceBet }) => {
  // Helper to get bet amount for a number
  const getBet = (num) => bets.find((b) => b.number === num)?.amount;

  // Table layout data
  const tableNumbers = [
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
  ];
  const colLabels = ["1st 12", "2nd 12", "3rd 12"];
  const bottomLabels = ["1 to 18", "EVEN", "RED", "BLACK", "ODD", "19 to 36"];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      {/* Table grid */}
      <div className="grid grid-cols-15 grid-rows-4 gap-1 select-none">
        {/* 0 cell */}
        <div
          className="row-span-3 col-span-1 flex items-center justify-center bg-green-600 text-white font-bold rounded-l-lg text-xl cursor-pointer relative hover:scale-105 transition shadow-lg border border-gray-400"
          onClick={() => onPlaceBet && onPlaceBet(0)}
        >
          0
          {getBet(0) && (
            <span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
              {getBet(0)}
            </span>
          )}
        </div>
        {/* Number grid */}
        {tableNumbers.map((row, rowIdx) =>
          row.map((num, colIdx) => (
            <div
              key={num}
              className={`row-start-${rowIdx + 1} col-start-${
                colIdx + 2
              } flex items-center justify-center h-12 w-12 font-bold text-white text-lg cursor-pointer relative rounded ${
                colors[num]
              } hover:scale-110 transition shadow-lg border border-gray-400`}
              onClick={() => onPlaceBet && onPlaceBet(num)}
            >
              {num}
              {getBet(num) && (
                <span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
                  {getBet(num)}
                </span>
              )}
            </div>
          ))
        )}
        {/* 2to1 labels (should be on 1st, 2nd, and 3rd row) */}
        {/* 2to1 labels (bettable) */}
        {[1, 2, 3].map((row) => (
          <div
            key={row}
            className={`[grid-row-start:${row}] [grid-column-start:14] flex items-center justify-center h-12 w-14 bg-[#fff0a9] text-[#d32f2f] font-bold text-base rounded-r-lg border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative`}
            onClick={() => onPlaceBet && onPlaceBet('2to1-' + row)}
          >
            2to1
            {getBet('2to1-' + row) && (
              <span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">{getBet('2to1-' + row)}</span>
            )}
          </div>
        ))}

        {/* 1st/2nd/3rd 12 */}
        {/* 1st/2nd/3rd 12 (bettable) */}
        {colLabels.map((label, idx) => (
          <div
            key={label}
            className={`row-start-4 col-start-${2 + idx * 4} col-span-4 flex items-center justify-center h-10 bg-[#fff0a9] text-[#d32f2f] font-bold text-base border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative`}
            onClick={() => onPlaceBet && onPlaceBet(label)}
          >
            {label}
            {getBet(label) && (
              <span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">{getBet(label)}</span>
            )}
          </div>
        ))}
        {/* Bottom row */}
        {/* Bottom row (bettable) */}
        {bottomLabels.map((label, idx) => (
          <div
            key={label}
            className={`row-start-5 col-start-${2 + idx * 2} col-span-2 flex items-center justify-center h-10 ${
              label === "RED"
                ? "bg-red-600 text-white"
                : label === "BLACK"
                ? "bg-black text-white"
                : "bg-[#fff0a9] text-[#d32f2f]"
            } font-bold text-base border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative`}
            onClick={() => onPlaceBet && onPlaceBet(label)}
          >
            {label}
            {getBet(label) && (
              <span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">{getBet(label)}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouletteTable;
