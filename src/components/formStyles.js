import styled from "@emotion/styled";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 50px auto;
  padding: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
`;
export const Title = styled.h1`
  text-align: center;
`;

export const InputContainer = styled.div`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 95%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
  }
`;
