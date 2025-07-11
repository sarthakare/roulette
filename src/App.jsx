
import "./App.css";
import React, { useState } from "react";
import LoadingScreen from "./pages/LoadingScreen";
import GameScreen from "./pages/GameScreen";


function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete ? (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      ) : (
        <GameScreen />
      )}
    </>
  );
}

export default App;
