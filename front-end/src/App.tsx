import { useWebsocket } from "./hook/useWebsocket.hook";

import "./App.css";
import { Count } from "./components/count/count";

function App() {
  const { connected } = useWebsocket();

  if (!connected) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Count />
    </div>
  );
}

export default App;
