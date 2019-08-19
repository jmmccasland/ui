import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  width: 100%;
  padding: ${props => props.theme.gutter};
  border: 1px solid ${props => props.theme.border};
  border-radius: ${props => props.theme.border_radius};
  background: ${props => props.theme.white};
  
  .header {
    max-width: 25rem;
    margin: 0 auto;
    text-align: center;
  }

  p {
    margin-bottom: 2rem;
    text-align: left;
    color: ${props => props.theme.disabled_txt};
    font-size: ${props => props.theme.xs};
  }
`;

const Card = ( {children, title, info } ) => {
  return (
    <StyledCard>
      {title ? (
        <div className="header">
          <h2>{title}</h2>
          <p>{info}</p>
        </div>
      ) : null }
      <div className="content">
        {children}
      </div>
    </StyledCard>
  );
}

export default Card;
