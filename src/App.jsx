import useSwitch from "./useSwitch";
import useDate from "./useDate";
import useCustomPointer from "./useCustomPointer";

function CustomCursor() {
  const position = useCustomPointer();

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
      }}
    >
      🔥
    </div>
  );
}

function App() {
  const [isOn, toggle] = useSwitch()
  const currentDate = useDate();

  return (
    <body style={{
      cursor: "none",
    }}>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>

      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        <CustomCursor />
      </div>



    </body>
  )
}

export default App
