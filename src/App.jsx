import { Router } from "lucide-react";
import TodoProvider from "../components/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <Router />
    </TodoProvider>
  );
};

export default App;
