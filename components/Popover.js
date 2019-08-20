import React from 'react';
import styled from 'styled-components';

const StyledPopover = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  min-width: 250px;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #ffffff;
  font-size: 14px;
  letter-spacing: 0;
  color: #8b8b8b;
  box-shadow: 1px 2px 24px rgba(0, 0, 0, 0.09);
  z-index: 999;

  .heading {
    margin: 0 16px;
    padding: 12px 5px 5px;
    border-bottom: 1px solid #8b8b8b;
    font-size: $f-xs;
    text-align: center;
  }

  .content {
    padding: 8px 0 8px;
  }

  a {
    display: block;
    padding: 6px 16px;
  }

  a:hover {
    background: #f1f1f1;
  }
`;

class Popover extends React.Component {
  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (ev) => {
    if (this.node.contains(ev.target)) {
      return;
    }
    this.props.close();
  }

  render() {
    const { title, children } = this.props;

    return (
      <div
        ref={node => this.node = node}
        onClick={this.props.close}
      >
        <StyledPopover>
          <div className="heading">
            {title}
          </div>
          <div className="content">
            {children}
          </div>
        </StyledPopover>
      </div>
    );
  }
}
  
export default Popover;