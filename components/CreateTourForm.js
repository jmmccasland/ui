import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import Error from './ErrorMessage';

const CREATE_TOUR_MUTATION = gql`
  mutation CREATE_TOUR_MUTATION(
    $name: String!
  ) {
    createTour(
      name: $name
    ) {
      id
    }
  }
`;

class CreateTourForm extends Component {
  state = {
    name: ''
  };

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type == 'number' ? parseFloat(value) : value;

    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation mutation={CREATE_TOUR_MUTATION} variables={this.state}>
        {(createTour, { loading, error }) => (
          <Form>
            <Error error={error} />
            <fieldset className="form-control" disabled={loading} aria-busy={loading}>
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required 
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
              <button 
                type="submit" 
                className="btn btn--submit"
                onClick={async ev => {
                  ev.preventDefault(); // stop from from submittings
                  const res = await createTour(); // call mutation
                  console.log(res);
                  // change them to the next page
                  Router.push({
                    pathname: '/tours'
                  });
                }}>Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateTourForm;
export { CREATE_TOUR_MUTATION };