import Link from 'next/link';
import Section from '../components/styles/Section';

const Home = props => (
  <div>
    <Section withContainer>
      <h2>Dashboard</h2>
      <Link href="/tours">
        <a>Tours</a>
      </Link>
    </Section>
  </div>
);

export default Home;