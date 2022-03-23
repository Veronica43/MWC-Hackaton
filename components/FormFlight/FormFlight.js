import { Layout } from "../Layout/Layout";
import {
  Select,
  WrapperForm,
  Form,
  Camp,
  Label,
  Input,
  Title,
  ButtonSave,
} from "../FormCompany/style";
import { useState } from "react";
import Router from "next/router";
import { countryList } from "../../services/paises";
import { ButtonPrimary } from "../Home/style";

const initalState = {
  company_id: "",
  date: "",
  origin_country: "",
  origin_continent: "",
  seats: "",
  destination_country: "",
  destination_continent: "",
};

const FormFlight = () => {
  const [error, setError] = useState(false);
  const [flight, setFlight] = useState(initalState);

  const {
    company_id,
    date,
    origin_country,
    origin_continent,
    seats,
    destination_country,
    destination_continent,
  } = flight;

  const handleChange = (e) => {
    setFlight({
      ...flight,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    //validación
    if (
      company_id === "" ||
      date === "" ||
      origin_country === "" ||
      origin_continent === "" ||
      seats === "" ||
      destination_country === "" ||
      destination_continent === ""
    ) {
      setError(true);
      return;
    }
    Router.push / setError(false);
    /*axios.post('url' , flight)
    //.then(res => {
      console.log(res);
      console.log(res.data)
    })*/
    Router.push("/allcompanies");
  };

  return (
    <Layout>
      <WrapperForm>
        <Title>Add Flights</Title>
        <Form onSubmit={onSubmitForm}>
          <Camp>
            <Input
              type="text"
              name="company_id"
              value={company_id}
              onChange={handleChange}
              placeholder="CompanyID"
            />
          </Camp>
          <Camp>
            <Input
              type="text"
              name="date"
              value={date}
              onChange={handleChange}
              placeholder="Data"
            />
          </Camp>
          <Camp>
            <Select
              onChange={handleChange}
              name="origin_country"
              value={origin_country}
            >
              {countryList.map((pais) => (
                <option key={pais} name="origin_country">
                  {pais}
                </option>
              ))}
            </Select>
          </Camp>
          <Camp>
            <Select
              onChange={handleChange}
              name="destination_country"
              value={destination_country}
            >
              {countryList.map((pais) => (
                <option key={pais} name="destination_country">
                  {pais}
                </option>
              ))}
            </Select>
          </Camp>

          <Camp>
            <Input
              type="text"
              name="origin_continent"
              value={origin_continent}
              onChange={handleChange}
              placeholder="Origin Continent"
            />
          </Camp>
          <Camp>
            <Input
              type="text"
              name="destination_continent"
              value={destination_continent}
              onChange={handleChange}
              placeholder="Destination Continent"
            />
          </Camp>
          <Camp>
            <Input
              name="seats"
              type="text"
              value={seats}
              onChange={handleChange}
              placeholder="Seats"
            />
          </Camp>
          <ButtonSave type="submit">Save Flight</ButtonSave>
          {error ? <p> Rellena todos los campos</p> : null}
        </Form>
      </WrapperForm>
    </Layout>
  );
};

export default FormFlight;
