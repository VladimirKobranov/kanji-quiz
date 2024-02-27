import { StoreProvider } from "./store";
import Main from "./Main";

export default function App() {
  return (
    <StoreProvider>
      <Main />
    </StoreProvider>
  );
}
