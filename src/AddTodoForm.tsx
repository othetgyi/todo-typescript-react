import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: Arial;
  font-size: 20px;
`;

const StyledInput = styled.input`
  font-family: Arial;
  font-size: 20px;
`;

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <form>
      <StyledInput
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <StyledButton
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          addTodo(text);
          setText("");
        }}
      >
        Add Todo
      </StyledButton>
    </form>
  );
};
