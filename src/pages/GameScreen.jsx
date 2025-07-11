
import React from "react";
import GameComponent from "../components/gameComponent";

const GameScreen = () => {
  // Responsive sidebar state
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  // Prevent body scroll when sidebar is open on mobile
  React.useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen w-full flex flex-col bg-black overflow-x-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-orange-500 px-4 sm:px-6 py-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl sm:text-3xl font-bold text-green-400">Roulette</span>
        </div>

        <div className="flex items-center space-x-2">
          <input
            className="rounded px-2 py-1 text-white bg-black text-xs sm:text-base w-28 sm:w-auto"
            placeholder="Search for a Sport, Game or Team"
          />
          <button className="bg-orange-500 text-white px-2 sm:px-4 py-1 rounded-full font-bold text-xs sm:text-base">
            OPEN BETS
          </button>
          <div className="flex items-center bg-black px-2 sm:px-3 py-1 rounded-full text-white font-bold text-xs sm:text-base">
            0.00 $
          </div>
          {/* Sidebar toggle button for mobile */}
          <button
            className="lg:hidden bg-black text-orange-500 border border-orange-500 px-2 py-1 rounded-full ml-2"
            onClick={() => setSidebarOpen((open) => !open)}
            aria-label="Toggle Sidebar"
          >
            {sidebarOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-1 relative min-h-0">
        {/* Sidebar (hidden on md and below, or toggled) */}
        <div
          className={
            `w-64 bg-black border-r border-gray-800 flex flex-col py-4 z-20 transition-transform duration-300 lg:translate-x-0 lg:static fixed top-0 left-0 h-full` +
            (sidebarOpen ? " translate-x-0" : " -translate-x-full") +
            " lg:flex"
          }
          style={{
            boxShadow: sidebarOpen ? "2px 0 8px rgba(0,0,0,0.5)" : undefined,
            maxHeight: "100vh"
          }}
        >
          <div className="flex items-center space-x-3 px-4 mb-6 mt-2 lg:mt-0">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
              D
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold">USER123</span>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto">
            {[
              { label: "Cricket", icon: "🏏", count: 16 },
              { label: "Football", icon: "⚽", count: 44 },
              { label: "Tennis", icon: "🎾", count: 20 },
              { label: "Casino", icon: "🎰" },
              { label: "Sports Book", icon: "🛡️" },
              { label: "Horse Racing", icon: "🐎", count: 20 },
              { label: "Greyhound Racing", icon: "🐕", count: 4 },
              { label: "Binary", icon: "💹", count: 1 },
              { label: "Kabaddi", icon: "🏃", count: 0 },
              { label: "Politics", icon: "🏛️", count: 0 },
              { label: "Basketball", icon: "🏀", count: 8 },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-900 cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-white">{item.label}</span>
                </div>
                {item.count !== undefined && (
                  <span className="bg-orange-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">
                    {item.count}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>
        {/* Overlay for sidebar on mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        {/* Center Content */}
        <div className="flex-1 flex items-center justify-center bg-black p-0 min-w-0">
          <div className="w-full h-full">
            <GameComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
