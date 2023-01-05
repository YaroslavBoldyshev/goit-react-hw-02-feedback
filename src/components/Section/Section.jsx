import styled from "styled-components";
import PropTypes from "prop-types";
export const Section = ({ title, children }) => {
  return (
    <FeedBackSection>
      <Title>{title}</Title>
      {children}
    </FeedBackSection>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};
const FeedBackSection = styled.div`
  width: 400px;
  margin: 0 auto;
  display flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;
const Title = styled.h1`
  font-size: 35px;
`;
