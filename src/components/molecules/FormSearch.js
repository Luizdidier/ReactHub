import React from "react";
import { Grid } from "@material-ui/core";
import { Field, Form as FormikForm, Formik } from "formik";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { Input } from "../atoms";

export default function FormSearch({
  placeholder,
  handleSubmit,
  name,
  initialValues,
  validationSchema,
}) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
      >
        <FormikForm>
          <Grid container justify="center">
            <Field name={name} as="input" style={{ width: "94%" }}>
              {({ field, form }) => (
                <Input
                  {...field}
                  error={form.errors[name] ? true : false}
                  type="text"
                  label={placeholder}
                  helperText={form.errors[name]}
                  width="94%"
                />
              )}
            </Field>
            <ButtonNoCss
              type="submit"
              className="MuiButtonBase-root MuiIconButton-root"
            >
              <FaSearch />
            </ButtonNoCss>
          </Grid>
        </FormikForm>
      </Formik>
    </>
  );
}

const ButtonNoCss = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
