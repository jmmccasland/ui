import styled from 'styled-components';

const StyledSection = styled.div`
  padding: ${props => props.theme.gutter};
`;

const StyledContainer = styled.div`
  max-width: ${props => props.theme.max_width};
  margin: 0 auto;
`;

const Section = props => {
  return (
    <StyledSection>
      {props.withContainer ? (
        <StyledContainer>
          {props.children}
        </StyledContainer>
      ) : (
        <div>
          {props.children}
        </div>
      )}
    </StyledSection>
  );
}

export default Section;
