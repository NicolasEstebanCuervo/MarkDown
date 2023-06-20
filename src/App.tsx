import { MarkDownProvider } from "./Context/MarkDownContext";
import Global from "./Components/Global";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
      <MarkDownProvider>
        <Global />
      </MarkDownProvider>
  );
}

export default App;

