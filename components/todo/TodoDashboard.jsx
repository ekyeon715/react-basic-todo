import { ClipboardCheck, Ellipsis, Monitor, Video } from "lucide-react";
import React from "react";
import styled from "styled-components";

const TodoDashboard = ({ all = 0, completed = 0, pending = 0 }) => {
  return (
    <DashboardSection>
      <DashboardHeader>
        <h1>Dashboard</h1>
      </DashboardHeader>
      <DashboardCardList>
        <DashboardCard flex="2" color="#e7582b">
          <div>
            <ClipboardCheck />
            <Ellipsis />
          </div>
          <p>
            {all} <br /> All tasks
          </p>
        </DashboardCard>
        <DashboardCard flex="1" color="#582be7">
          <div>
            <Monitor />
            <Ellipsis />
          </div>
          <p>
            4 <br />
            {completed}
          </p>
        </DashboardCard>
        <DashboardCard flex="1" color="#242424">
          <div>
            <Video />
            <Ellipsis />
          </div>
          <p>
            2 <br />
            {pending}
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
  gap: 1rem;
`;

const DashboardHeader = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const DashboardCardList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const DashboardCard = styled.div`
  background-color: ${(props) => props.color};
  padding: 1rem;
  border-radius: 1rem;
  height: calc((640px / 4));

  color: white;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: ${(props) => props.flex};

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
