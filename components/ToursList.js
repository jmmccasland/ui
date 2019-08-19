import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import TourCard from './TourCard';

const ALL_TOURS_QUERY = gql`
  query ALL_TOURS_QUERY {
    tours {
      id
      name
      startDate
      endDate
    }
  }
`;

const StyledToursList = styled.div`
  margin-top: ${props => props.theme.gutter};

  > * + * {
    margin-top: ${props => props.theme.gutter};
  }
`;

class ToursList extends Component {
  render() {
    return (
      <Query query={ALL_TOURS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <StyledToursList>
              {data.tours.map(tour => 
                <TourCard tour={tour} key={tour.id} /> 
              )}
            </StyledToursList>
          );
        }}
      </Query>
    );
  }
}

export default ToursList;
export { ALL_TOURS_QUERY };