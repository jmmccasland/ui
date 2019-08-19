import Link from 'next/link';
import styled from 'styled-components';
import ToursList from '../components/ToursList';
import Section from '../components/styles/Section';
import Button from '../components/styles/Button';

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

    <ToursList />
  </Section>
);

export default Tours;