import { Route } from "lucide-react";
import { BrowserRouter, Routes } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import TodoDetailPage from "./page/TodoDetailPage";
import HomePage from "./page/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<TodoDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
