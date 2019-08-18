import Link from 'next/link';
import Section from '../components/styles/Section';
import Button from '../components/styles/Button';
import styled from 'styled-components';

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  
  h2 {
    margin: 0;
  }

  a {
    color: ${props => props.theme.blue};
  }
`;

const CTA = styled.div`
  margin-top: 4rem;
  text-align: center;

  h3 {
    margin-top: 0;
  }
`;

const Tours = props => (
  <Section withContainer>
    <Heading>
      <h2>Tours</h2>
      <Link href="/">
        <a>Add a tour</a>
      </Link>
    </Heading>

    <CTA>
      <h3>Create your first tour</h3>
      <Button 
        as="link"
        href="/"
        variant="primary"
      >
        Get Started
      </Button>
    </CTA>
  </Section>
);

export default Tours;