import Global from "./Componentes/Global";
import { MarkDownProvider } from "./Contextos/MarkDownContext";

const App = () => {
  return (
    <MarkDownProvider>
      <Global />
    </MarkDownProvider>
  );
};

export default App 