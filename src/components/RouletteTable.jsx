// const colors = {
//   0: "bg-green-600",
//   1: "bg-red-600",
//   2: "bg-black",
//   3: "bg-red-600",
//   4: "bg-black",
//   5: "bg-red-600",
//   6: "bg-black",
//   7: "bg-red-600",
//   8: "bg-black",
//   9: "bg-red-600",
//   10: "bg-black",
//   11: "bg-black",
//   12: "bg-red-600",
//   13: "bg-black",
//   14: "bg-red-600",
//   15: "bg-black",
//   16: "bg-red-600",
//   17: "bg-black",
//   18: "bg-red-600",
//   19: "bg-red-600",
//   20: "bg-black",
//   21: "bg-red-600",
//   22: "bg-black",
//   23: "bg-red-600",
//   24: "bg-black",
//   25: "bg-red-600",
//   26: "bg-black",
//   27: "bg-red-600",
//   28: "bg-black",
//   29: "bg-black",
//   30: "bg-red-600",
//   31: "bg-black",
//   32: "bg-red-600",
//   33: "bg-black",
//   34: "bg-red-600",
//   35: "bg-black",
//   36: "bg-red-600",
// };

const RouletteTable = ({ bets = [], onPlaceBet }) => {
  // Helper to get bet amount for a number
  const getBet = (num) => bets.find((b) => b.number === num)?.amount;

  // Table layout data
  // const tableNumbers = [
  //   [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
  //   [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
  //   [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
  // ];
  // const colLabels = ["1st 12", "2nd 12", "3rd 12"];
  // const bottomLabels = ["1 to 18", "EVEN", "RED", "BLACK", "ODD", "19 to 36"];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      {/* Table grid */}
      <div className="grid grid-cols-14 grid-rows-4 gap-1 select-none">
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
        {/* Number grid (manual layout, no map/arrays, responsive sizing) */}
        {/* Row 1: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36 */}
        <div className="row-start-1 col-start-2 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(3)}>3{getBet(3) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(3)}</span>)}</div>
        <div className="row-start-1 col-start-3 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(6)}>6{getBet(6) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(6)}</span>)}</div>
        <div className="row-start-1 col-start-4 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(9)}>9{getBet(9) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(9)}</span>)}</div>
        <div className="row-start-1 col-start-5 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(12)}>12{getBet(12) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(12)}</span>)}</div>
        <div className="row-start-1 col-start-6 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(15)}>15{getBet(15) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(15)}</span>)}</div>
        <div className="row-start-1 col-start-7 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(18)}>18{getBet(18) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(18)}</span>)}</div>
        <div className="row-start-1 col-start-8 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(21)}>21{getBet(21) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(21)}</span>)}</div>
        <div className="row-start-1 col-start-9 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(24)}>24{getBet(24) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(24)}</span>)}</div>
        <div className="row-start-1 col-start-10 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(27)}>27{getBet(27) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(27)}</span>)}</div>
        <div className="row-start-1 col-start-11 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(30)}>30{getBet(30) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(30)}</span>)}</div>
        <div className="row-start-1 col-start-12 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(33)}>33{getBet(33) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(33)}</span>)}</div>
        <div className="row-start-1 col-start-13 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(36)}>36{getBet(36) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(36)}</span>)}</div>

        {/* Row 2: 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35 */}
        <div className="row-start-2 col-start-2 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(2)}>2{getBet(2) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(2)}</span>)}</div>
        <div className="row-start-2 col-start-3 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(5)}>5{getBet(5) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(5)}</span>)}</div>
        <div className="row-start-2 col-start-4 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(8)}>8{getBet(8) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(8)}</span>)}</div>
        <div className="row-start-2 col-start-5 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(11)}>11{getBet(11) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(11)}</span>)}</div>
        <div className="row-start-2 col-start-6 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(14)}>14{getBet(14) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(14)}</span>)}</div>
        <div className="row-start-2 col-start-7 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(17)}>17{getBet(17) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(17)}</span>)}</div>
        <div className="row-start-2 col-start-8 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(20)}>20{getBet(20) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(20)}</span>)}</div>
        <div className="row-start-2 col-start-9 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(23)}>23{getBet(23) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(23)}</span>)}</div>
        <div className="row-start-2 col-start-10 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(26)}>26{getBet(26) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(26)}</span>)}</div>
        <div className="row-start-2 col-start-11 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(29)}>29{getBet(29) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(29)}</span>)}</div>
        <div className="row-start-2 col-start-12 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(32)}>32{getBet(32) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(32)}</span>)}</div>
        <div className="row-start-2 col-start-13 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(35)}>35{getBet(35) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(35)}</span>)}</div>

        {/* Row 3: 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34 */}
        <div className="row-start-3 col-start-2 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(1)}>1{getBet(1) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(1)}</span>)}</div>
        <div className="row-start-3 col-start-3 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(4)}>4{getBet(4) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(4)}</span>)}</div>
        <div className="row-start-3 col-start-4 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(7)}>7{getBet(7) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(7)}</span>)}</div>
        <div className="row-start-3 col-start-5 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(10)}>10{getBet(10) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(10)}</span>)}</div>
        <div className="row-start-3 col-start-6 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(13)}>13{getBet(13) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(13)}</span>)}</div>
        <div className="row-start-3 col-start-7 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(16)}>16{getBet(16) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(16)}</span>)}</div>
        <div className="row-start-3 col-start-8 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(19)}>19{getBet(19) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(19)}</span>)}</div>
        <div className="row-start-3 col-start-9 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(22)}>22{getBet(22) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(22)}</span>)}</div>
        <div className="row-start-3 col-start-10 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(25)}>25{getBet(25) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(25)}</span>)}</div>
        <div className="row-start-3 col-start-11 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(28)}>28{getBet(28) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(28)}</span>)}</div>
        <div className="row-start-3 col-start-12 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-red-600 hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(31)}>31{getBet(31) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(31)}</span>)}</div>
        <div className="row-start-3 col-start-13 flex items-center justify-center aspect-square font-bold text-white text-xs sm:text-base md:text-lg cursor-pointer relative rounded bg-black hover:scale-110 transition shadow-lg border border-gray-400" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet(34)}>34{getBet(34) && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet(34)}</span>)}</div>
        {/* 2to1 labels (should be on 1st, 2nd, and 3rd row) */}
        {/* 2to1 labels (bettable) */}
        {/* 2to1 labels (manual, responsive) */}
        <div className="[grid-row-start:1] [grid-column-start:14] flex items-center justify-center aspect-[7/6] font-bold text-[#d32f2f] text-xs sm:text-base md:text-lg rounded-r-lg border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative bg-[#fff0a9]" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet('2to1-1')}>2to1{getBet('2to1-1') && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet('2to1-1')}</span>)}</div>
        <div className="[grid-row-start:2] [grid-column-start:14] flex items-center justify-center aspect-[7/6] font-bold text-[#d32f2f] text-xs sm:text-base md:text-lg rounded-r-lg border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative bg-[#fff0a9]" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet('2to1-2')}>2to1{getBet('2to1-2') && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet('2to1-2')}</span>)}</div>
        <div className="[grid-row-start:3] [grid-column-start:14] flex items-center justify-center aspect-[7/6] font-bold text-[#d32f2f] text-xs sm:text-base md:text-lg rounded-r-lg border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative bg-[#fff0a9]" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet('2to1-3')}>2to1{getBet('2to1-3') && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet('2to1-3')}</span>)}</div>

        {/* 1st/2nd/3rd 12 */}
        {/* 1st/2nd/3rd 12 (bettable) */}
        {/* 1st/2nd/3rd 12 (manual, responsive) */}
        <div className="row-start-4 col-start-2 col-span-4 flex items-center justify-center aspect-[4/1] font-bold text-[#d32f2f] text-xs sm:text-base md:text-lg border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative bg-[#fff0a9]" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet('1st 12')}>1st 12{getBet('1st 12') && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet('1st 12')}</span>)}</div>
        <div className="row-start-4 col-start-6 col-span-4 flex items-center justify-center aspect-[4/1] font-bold text-[#d32f2f] text-xs sm:text-base md:text-lg border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative bg-[#fff0a9]" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet('2nd 12')}>2nd 12{getBet('2nd 12') && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet('2nd 12')}</span>)}</div>
        <div className="row-start-4 col-start-10 col-span-4 flex items-center justify-center aspect-[4/1] font-bold text-[#d32f2f] text-xs sm:text-base md:text-lg border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative bg-[#fff0a9]" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet('3rd 12')}>3rd 12{getBet('3rd 12') && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet('3rd 12')}</span>)}</div>
        {/* Bottom row */}
        {/* Bottom row (bettable) */}
        {/* Bottom row (manual, responsive) */}
        <div className="row-start-5 col-start-2 col-span-2 flex items-center justify-center aspect-[2/1] font-bold border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative bg-[#fff0a9] text-[#d32f2f] text-xs sm:text-base md:text-lg" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet('1 to 18')}>1 to 18{getBet('1 to 18') && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet('1 to 18')}</span>)}</div>
        <div className="row-start-5 col-start-4 col-span-2 flex items-center justify-center aspect-[2/1] font-bold border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative bg-[#fff0a9] text-[#d32f2f] text-xs sm:text-base md:text-lg" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet('EVEN')}>EVEN{getBet('EVEN') && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet('EVEN')}</span>)}</div>
        <div className="row-start-5 col-start-6 col-span-2 flex items-center justify-center aspect-[2/1] font-bold border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative bg-red-600 text-white text-xs sm:text-base md:text-lg" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet('RED')}>RED{getBet('RED') && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet('RED')}</span>)}</div>
        <div className="row-start-5 col-start-8 col-span-2 flex items-center justify-center aspect-[2/1] font-bold border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative bg-black text-white text-xs sm:text-base md:text-lg" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet('BLACK')}>BLACK{getBet('BLACK') && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet('BLACK')}</span>)}</div>
        <div className="row-start-5 col-start-10 col-span-2 flex items-center justify-center aspect-[2/1] font-bold border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative bg-[#fff0a9] text-[#d32f2f] text-xs sm:text-base md:text-lg" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet('ODD')}>ODD{getBet('ODD') && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet('ODD')}</span>)}</div>
        <div className="row-start-5 col-start-12 col-span-2 flex items-center justify-center aspect-[2/1] font-bold border border-gray-400 cursor-pointer hover:bg-yellow-300 transition relative bg-[#fff0a9] text-[#d32f2f] text-xs sm:text-base md:text-lg" style={{minWidth:0}} onClick={() => onPlaceBet && onPlaceBet('19 to 36')}>19 to 36{getBet('19 to 36') && (<span className="absolute bottom-1 right-1 bg-yellow-400 text-black text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full shadow-lg">{getBet('19 to 36')}</span>)}</div>
      </div>
    </div>
  );
};

export default RouletteTable;
