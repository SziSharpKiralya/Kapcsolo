import { useState } from "react";

export function ReactKapcsolo() {
  const [light, setLight] = useState<boolean>(false);

  const changeLight = () => {
    if (light) {
      setLight(false);
    } else {
      setLight(true);
    }
  };

  return (
    <>
      <button onClick={changeLight}>Kapcsoló</button>
      <p>{light ? "bekapcsolt" : "kikapcsolt"}</p> 
      
    </>
  );
}
