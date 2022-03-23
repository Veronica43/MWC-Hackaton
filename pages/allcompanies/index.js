import React, { useState, useRef, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { Layout } from "../../components/Layout/Layout";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Link from "next/link";
import axios from "axios";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { color } from "highcharts";
import { ButtonPrimary } from "../../components/Home/style";

const TableContainer = styled.section`
  display: flex;
  margin: 20px 0 30px 0;
  justify-content: space-around;
  font-family: "Times New Roman";
  @media (max-width: 600px) {
    margin-top: 1rem;
    align-items: center;
    align-content: center;
    margin-left: 20rem;
    width: 685px;
    height: 700px;
  }
`;

const ButtonCompany = styled(Button)`
  background-color: red;

  border-radius: 16px;
  position: ${(props) => (props.absolute ? "absolute" : "null")};
  bottom: 0;
  /* left: 20px; */
  margin: 15px 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  gap: 1rem;
  @media (max-width: 600px) {
    display: flex;
    margin-left: 20rem;
  }
`;

const AllCompaniesContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 600px) {
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const AllCompanies = () => {
  const gridRef = useRef(null);

  const checkboxSelection = (params) => {
    return params.node.group === true;
  };

  const onButtonClick = (e) => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => `${node.id}`)
      .join(", ");
    const id = selectedDataStringPresentation;
    deleteCompany(id);
  };

  const [rowData, setRowData] = useState();

  const getApi = () => {
    axios.get("https://nuwe-mwc-22.herokuapp.com/companies/").then((res) => {
      setRowData(res.data);
    });
  };

  const deleteCompany = async (id) => {
    await axios.delete(`http://nuwe-mwc-22.herokuapp.com/companies/${id}`);
    getApi();
  };

  const updated = (id) => {
    rowData.filter((data) => data.id !== id);
  };

  console.log(updated);

  useEffect(() => {
    getApi();
  }, []);

  const gridStyle = useMemo(() => ({ height: "550px", width: "803px" }), []);
  const suppressRowHoverHighlight = true;
  const columnHoverHighlight = true;
  const pagination = true;
  const paginationPageSize = 10;

  const [columnDefs] = useState([
    {
      field: "name",
      sortable: true,
      filter: true,
      resizable: true,
      checkboxSelection: true,
    },
    { field: "website", sortable: true, filter: true, resizable: true },
    {
      field: "total_flights",
      headerName: "Total Flights",
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
    },
    {
      field: "total_seats",
      headerName: "Total Seats",
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
    },
  ]);

  return (
    <Layout>
      <Title>All Companies</Title>
      <AllCompaniesContainer>
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
        <ButtonContainer>
          <ButtonPrimary>
            <Link href="/company-form">
              <a>
                <li>Add Company</li>
              </a>
            </Link>
          </ButtonPrimary>
          <ButtonPrimary>
            <Link href="/flight-form">
              <a>
                <li>Add Flight</li>
              </a>
            </Link>
          </ButtonPrimary>

          <ButtonPrimary onClick={onButtonClick}>Delete Company</ButtonPrimary>
        </ButtonContainer>
      </AllCompaniesContainer>
    </Layout>
  );
};

export default AllCompanies;
