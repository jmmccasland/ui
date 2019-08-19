import Section from '../components/styles/Section';
import Card from '../components/styles/Card';
import CreateTourForm from '../components/CreateTourForm';

class CreateTour extends React.Component {
  render() {
    return (
      <Section withContainer>
        <Card title="Create Tour">
          <CreateTourForm />
        </Card>
      </Section>
    );
  }
}

export default CreateTour;
