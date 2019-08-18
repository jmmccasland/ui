import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
  padding: 12px;
  border-radius: ${props => props.theme.border_radius} / 2;
  font-size: ${props => props.theme.xs};
  font-weight: bold;
  cursor: pointer;

  &.submit,
  &.primary {
    background: ${props => props.theme.blue};
    color: ${props => props.theme.white};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.disabled {
    color: ${props => props.theme.disabled_text};
    background: ${props => props.theme.disabled_bg};
  }
`;

const StyledLink = styled.div`
  display: block;
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
  padding: 12px;
  border-radius: calc(${props => props.theme.border_radius} / 2);
  font-size: ${props => props.theme.xs};
  font-weight: bold;
  cursor: pointer;

  &.submit,
  &.primary {
    background: ${props => props.theme.blue};
    color: ${props => props.theme.white};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.disabled {
    color: ${props => props.theme.disabled_text};
    background: ${props => props.theme.disabled_bg};
  }
`;

const Button = props => {
  const { as, handleClick, href, variant } = props;

  if (as === 'link') {
    return (
      <StyledLink className={variant}>
        <Link href={href}>
          <a>
            {props.children} goes to {href}
          </a>
        </Link>
      </StyledLink>
    ); 
  }

  return (
    <StyledButton onClick={handleClick}>
      {props.children}
    </StyledButton>
  );
}

export default Button;