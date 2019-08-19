import styled from 'styled-components';

const StyledForm = styled.form`
  fieldset {
    max-width: 25rem;
    margin-left: auto;
    margin-right: auto;
    border: none;
  }

  label {
    display: block;
    font-size: ${props => props.theme.xs};
    font-weight: bold;
  }
  
  input {
    display: block;
    width: 100%;
    margin-top: 5px;
    padding: 12px;
    border: 1px solid ${props => props.theme.border};
    border-radius: ${props => props.theme.border_radius};
    font-size: ${props => props.theme.xs};
  }
  
  .btn {
    width: 100%;
    padding: 12px;
    border-radius: calc(${props => props.theme.border_radius} / 2);
    font-size: ${props => props.theme.xs};
    font-weight: bold;
  }

  .btn--submit {
    background: ${props => props.theme.blue};
    color: ${props => props.theme.white};
  }

  .btn--danger {
    background: ${props => props.theme.red};
    color: ${props => props.theme.white};
  }

  .btn:disabled {
    cursor: not-allowed;
  }

  .btn--disabled {
    color: ${props => props.theme.disabled_txt};
    background: ${props => props.theme.disabled_bg};
  }

  * + * {
    margin-top: 1rem;
  }

  .create-tour-form {
    max-width: 21rem;
    margin: 0 auto;
  }

  .create-tour-form-title {
    margin: 0 0 ${props => props.theme.gutter};
    font-size: ${props => props.theme.lg};
    text-align: center;
  }
`;

function Form({ children }) {
    return (
      <StyledForm>
        {children}
      </StyledForm>
    );
  }
  
  export default Form;