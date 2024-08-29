import RootLayout from "../components/layout/RootLayout";
import TodoContainer from "../components/todo/TodoContainer";
import TodoDashboard from "../components/todo/TodoDashboard";
import TodoProvider from "../components/TodoProvider";

const App = () => {
  return (
    <RootLayout>
      <TodoProvider>
        <TodoContainer />
      </TodoProvider>
    </RootLayout>
  );
};

export default App;
