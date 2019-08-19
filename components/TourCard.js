import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

import Card from './styles/Card';
import Popover from './Popover';

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .title {
    margin: 0 0 2px;
    font-weight: bold;
    font-size: ${props => props.theme.reg};
    color: ${props => props.theme.black};
  }

  .dates {
    margin: 0;
    font-weight: bold;
    font-size: ${props => props.theme.reg};
    color: ${props => props.theme.disabled_txt};
  }
`;

class TourCard extends Component {
  static propTypes = {
    tour: PropTypes.object.isRequired,
  };

  state = {
    showPopover: false
  };

  togglePopover = (value) => {
    this.setState({ showPopover: value })
  }

  render() {
    const { showPopover } = this.state;
    const { tour } = this.props;

    return (
      <Card>
        <StyledContent>
          <div>
            <h3 className="title">{tour.name}</h3>
            <p className="dates">Dates TBD</p>
          </div>
          <button onClick={() => this.togglePopover(true)}>
            <img src="/static/icons/dots.svg" alt="Open tour settings."/>
          </button>
        </StyledContent>
        {showPopover && (
          <Popover title="Tour Actions" close={() => this.togglePopover(false)}>
            <Link href={`/tours/${tour.id}/edit`}>
              <a>Edit</a>
            </Link>
            <Link href={`/tours/${tour.id}/delete`}>
              <a>Delete</a>
            </Link>
          </Popover>
        )}
      </Card>
    );
  }
}

export default TourCard;