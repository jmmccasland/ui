import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

import Card from './styles/Card';
import Popover from './Popover';

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
      <Card className="tour-card">
        <div className="card__header--space">
          <div>
            <h3 className="title">{tour.title}</h3>
            <p className="dates">Dates TBD</p>
          </div>
          <button onClick={() => this.togglePopover(true)}>
            {/* <img src={menuIcon} alt="Open tour settings."/> */}
            Settings
          </button>
        </div>
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