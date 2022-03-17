import React, { useState, useRef, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { Layout } from "../../components/Layout/Layout";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import axios from "axios";
import styled from "@emotion/styled";

const TableContainer = styled.section`
  display: flex;
  margin: 20px 0 30px 0;
  justify-content: space-around;
  font-family: "Times New Roman";
`;

const AllCompaniesContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 30px;
`;
const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  position: ${(props) => (props.absolute ? "absolute" : "null")};
  top: -60px;
`;

const Data = () => {
  const gridRef = useRef(null);

  const checkboxSelection = (params) => {
    return params.node.group === true;
  };

  const [rowData, setRowData] = useState();

  const getApi = () => {
    axios.get("https://nuwe-mwc-22.herokuapp.com/SeatsFlight").then((res) => {
      setRowData(res.data);
    });
  };

  useEffect(() => {
    getApi();
  }, []);

  const gridStyle = useMemo(() => ({ height: "730px", width: "900px" }), []);
  const suppressRowHoverHighlight = true;
  const columnHoverHighlight = true;
  const pagination = true;
  const paginationPageSize = 15;

  const [columnDefs] = useState([
    {
      field: "Origin_Country",
      headerName: "Origin Country",
      sortable: true,
      filter: true,
      resizable: true,
      checkboxSelection: true,
    },
    {
      field: "Destination_Country",
      headerName: "Destination Country",
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "Seats_per_flight",
      headerName: "Seats per flight",
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "travel",
      headerName: "Travel",
      minWidth: 295,
      sortable: true,
      filter: true,
      resizable: true,
    },
  ]);

  return (
    <Layout>
      <AllCompaniesContainer>
        <Title>Statistics</Title>
        <TableContainer>
          <div className="ag-theme-alpine" style={gridStyle}>
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              rowSelection="multiple"
              pagination={pagination}
              paginationPageSize={paginationPageSize}
              suppressRowHoverHighlight={suppressRowHoverHighlight}
              columnHoverHighlight={columnHoverHighlight}
              groupSelectsChildren={true}
            ></AgGridReact>
          </div>
        </TableContainer>
      </AllCompaniesContainer>
    </Layout>
  );
};

export default Data;
