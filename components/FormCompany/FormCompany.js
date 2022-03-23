import { Layout } from "../Layout/Layout";
import { useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";
import { Title, WrapperForm, Form, Camp, Input, ButtonSave } from "./style";
import { ButtonPrimary } from "../Home/style";

const FormCompany = () => {
  const [error, setError] = useState(false);
  const [company, setCompany] = useState({
    name: "",
    website: "",
    total_flights: "",
    total_seats: "",
  });

  const { name, website, total_flights, total_seats } = company;

  const handleChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };
  const sendObject = async () => {
    await axios.post("https://nuwe-mwc-22.herokuapp.com/companies", company);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();

    //validacion
    if (
      name === "" ||
      website === "" ||
      total_flights === "" ||
      total_seats === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    sendObject();

    Router.push("/allcompanies");
  };

  return (
    <Layout>
      <WrapperForm>
        <Title>Add Company</Title>
        <Form column onSubmit={onSubmitForm}>
          <Camp>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Name"
            />
          </Camp>
          <Camp>
            <Input
              type="text"
              name="website"
              value={website}
              onChange={handleChange}
              placeholder="Website"
            />
          </Camp>
          <Camp>
            <Input
              type="number"
              name="total_flights"
              value={total_flights}
              onChange={handleChange}
              placeholder="Total flights"
            />
          </Camp>
          <Camp>
            <Input
              type="number"
              name="total_seats"
              value={total_seats}
              onChange={handleChange}
              placeholder="Total seats"
            />
          </Camp>
          <ButtonSave type="submit">Save Company</ButtonSave>
          {error ? <p> Rellena todos los campos</p> : null}
        </Form>
      </WrapperForm>
    </Layout>
  );
};

export default FormCompany;
