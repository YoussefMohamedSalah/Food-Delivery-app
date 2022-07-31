import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function SearchBar() {
  const [input, setInput] = useState('');
  const Navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    Navigate('/searched/' + input);
  };

  return (
    <FormStyled onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Find food here..."
        />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1.5rem 1rem 1.5rem 0rem;

  div {
    width: 60rem;
    position: relative;
  }

  input {
    border: none;
    /* background: linear-gradient(35deg, #494949, #313131); */
    background: #f7f7f7;
    font-size: 1rem;
    color: #000000;
    padding: 1.5rem 2.5rem;
    border-radius: 1rem;
    outline: none;
    width: 90%;
    text-indent: 1rem;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #777777;
  }
`;

export default SearchBar;
