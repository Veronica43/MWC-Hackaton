import React, { useEffect } from "react";
import { Layout } from "../components/Layout/Layout";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 40xp;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DashboardContainer = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Grafica2() {
  useEffect(() => {
    //@ts-ignore
    import("@cumul.io/cumulio-dashboard");
  }, []);
  return (
    <Layout>
      <Container>
        <DashboardContainer>
          {" "}
          <cumulio-dashboard
            dashboardId="79790e98-9e43-422a-adba-3805fff3e147"
            authKey="4e848870-e851-4b37-b0b1-7bb97f37a43d"
            authToken="UDG3seBtoOsMPNIZxvXYO41pixo8YKdxmAVxwvYQsAQ4uim1oILUqGu6a0QaDImPk156Zl5FRl2Rgee42TH36PQXASp9GOqCbWWERCb7QvrAqP1WR3pKzvIXRI3OoOtvwifBPLO1J3Kr8Rjf2uCi9O"
            appServer="https://app.cumul.io/"
          ></cumulio-dashboard>
        </DashboardContainer>
      </Container>
    </Layout>
  );
}
