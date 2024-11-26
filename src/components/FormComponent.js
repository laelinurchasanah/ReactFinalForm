import React from "react";
import { Field, Form } from "react-final-form";
import {
  FormContainer,
  Title,
  InputContainer,
  Input,
  ErrorText,
  SubmitButton,
} from "./formStyles";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Nama tidak boleh kosong";
  } else if (values.name.length < 5 || values.name.length > 12) {
    errors.name = "Nama harus antara 5 hingga 12 karakter";
  }

  if (!values.email) {
    errors.email = "Email tidak boleh kosong";
  }

  if (!values.password) {
    errors.password = "Password tidak boleh kosong";
  } else if (values.password.length < 6) {
    errors.password = "Password harus minimal 6 karakter";
  }

  return errors;
};

const FormComponent = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <FormContainer onSubmit={handleSubmit}>
          <Title>Form Registration</Title>
          <Field name="name">
            {({ input, meta }) => (
              <InputContainer>
                <label htmlFor="name">Nama</label>
                <Input {...input} id="name" type="text" placeholder="Nama" />
                {meta.touched && meta.error && (
                  <ErrorText>{meta.error}</ErrorText>
                )}
              </InputContainer>
            )}
          </Field>

          <Field name="email">
            {({ input, meta }) => (
              <InputContainer>
                <label htmlFor="email">Email</label>
                <Input {...input} id="email" type="email" placeholder="Email" />
                {meta.touched && meta.error && (
                  <ErrorText>{meta.error}</ErrorText>
                )}
              </InputContainer>
            )}
          </Field>

          <Field name="password">
            {({ input, meta }) => (
              <InputContainer>
                <label htmlFor="password">Password</label>
                <Input
                  {...input}
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                {meta.touched && meta.error && (
                  <ErrorText>{meta.error}</ErrorText>
                )}
              </InputContainer>
            )}
          </Field>

          <SubmitButton type="submit" disabled={submitting || pristine}>
            Submit
          </SubmitButton>
        </FormContainer>
      )}
    />
  );
};

export default FormComponent;
