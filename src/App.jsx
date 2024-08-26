import RootLayout from "../components/layout/RootLayout";
import TodoContainer from "../components/todo/TodoContainer";
import TodoDashboard from "../components/todo/TodoDashboard";

const App = () => {
  return (
    <RootLayout>
      <TodoDashboard />
      <TodoContainer />
    </RootLayout>
  );
};

export default App;
