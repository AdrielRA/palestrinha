import { ToastProvider } from "react-toast-notifications";
import GlobalStyles from "../shared/styles/GlobalStyles";
import { Home } from "./pages";

function App() {
  return (
    <ToastProvider>
      <GlobalStyles />
      <Home />
    </ToastProvider>
  );
}

export default App;
