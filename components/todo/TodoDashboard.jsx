import { ClipboardCheck, Ellipsis, Monitor, Video } from "lucide-react";
import { useContext } from "react";
import styled from "styled-components";
import TodoContext from "../TodoContext";
import { Link, useSearchParams } from "react-router-dom";

const TodoDashboard = () => {
  const { todos, completedTodos, pendingTodos } = useContext(TodoContext);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  return (
    <DashboardSection>
      <DashboardHeader>
        <h1>Dashboard</h1>
      </DashboardHeader>
      <DashboardCardList>
        <DashboardCard flex="2" color="#e7582b" to={"/"} $highlight={!filter}>
          <div>
            <ClipboardCheck />
            <Ellipsis />
          </div>
          <p>
            {todos.length} <br /> All tasks
          </p>
        </DashboardCard>
        <DashboardCard
          flex="1"
          color="#582be7"
          to={"?filter=completed"}
          $highlight={filter === "completed"}
        >
          <div>
            <Monitor />
            <Ellipsis />
          </div>
          <p>
            {completedTodos.length} <br />
            Completed
          </p>
        </DashboardCard>
        <DashboardCard
          flex="1"
          color="#242424"
          to={"?filter=pending"}
          $highlight={filter === "pending"}
        >
          <div>
            <Video />
            <Ellipsis />
          </div>
          <p>
            {pendingTodos.length} <br />
            Pending
          </p>
        </DashboardCard>
      </DashboardCardList>
    </DashboardSection>
  );
};

export default TodoDashboard;

const DashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

const DashboardHeader = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const DashboardCardList = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const DashboardCard = styled.div`
  background-color: ${({ $color }) => $color};
  padding: 1rem;
  border-radius: 1rem;
  height: calc((640px / 4));

  color: white;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: ${({ $flex }) => $flex};

  text-decoration: ${({ $highlight }) => ($highlight ? "underline" : "none")};

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
