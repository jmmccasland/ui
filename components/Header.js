import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.gutter};
  background: ${props => props.theme.white};
  .logo {
    margin: 0;
    font-size: ${props => props.theme.reg};
    text-transform: lowercase;
    transform: skew(4deg);
  }
  .logo a {
    color: ${props => props.theme.black};
    text-decoration: none;
    font-family: Roboto;
    font-weight: bolder;
  }

  .nav {
    transform: skew(4deg);
  }

  .nav > * + * {
    margin-left: 1rem;
  }
`;

const Header = () => (
  <StyledHeader>
    <h1 className="logo">
      <Link href="/">
        <a>book better</a>
      </Link>
    </h1>
    <nav className="nav">
      <Link href="/signup">
        <a>Signup</a>
      </Link>
      <Link href="/tours">
        <a>Tours</a>
      </Link>
    </nav>
  </StyledHeader>
)

export default Header;