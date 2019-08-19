// import CreateTourForm from '../../components/forms/create-tour-form';
import Modal from '../components/styles/Modal';

class CreateTour extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
  }

  close() {
    // this.props.history.push(`/tours`);
  }

  render() {
    return (
      <Modal 
        title="Create Tour"
        close={this.close}
      >
        {/* <CreateTourForm /> */}
        hello
      </Modal>
    );
  }
}

export default CreateTour;
