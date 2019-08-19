import styled from 'styled-components';
// import './_modal.scss';
import Card from './Card';

const StyledModal = styled.div`
  .section--modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: calc(${props => props.theme.gutter} * 6);
    background: ${props => props.theme.overlay};
    z-index: ${props => props.theme.overlay};
  }

  .modal-content {
    position: relative;
    max-width: 45rem;
    margin: 0 auto;
    z-index: ${props => props.theme.modal};
  }

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${props => props.theme.overlay};
  }


  // modal contents
  .modal-header {
    display: flex;
    justify-content: space-between;
  }
`;

function Modal({ children, close, title, info }) {
    return (
      <StyledModal>
        <div className="section section--modal">
          <div className="container">
            <div className="modal-content">
              <Card title={title} info={info}>
                {children}
              </Card>
            </div>
            <button onClick={() => close()} className="modal-overlay"></button>
          </div>
        </div>
      </StyledModal>
    );
  }
  
  export default Modal;
  