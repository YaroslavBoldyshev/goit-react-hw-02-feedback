import styled from "styled-components";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedBackButtonsList>

      {options.map((el) => (
        <FeedBackButton type="button" key={el} onClick={onLeaveFeedback}>
          {el}
        </FeedBackButton>
      ))}
      
    </FeedBackButtonsList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};

const FeedBackButtonsList = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 20px;
`;

const FeedBackButton = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 5px;
  font-size: 18px;
  background-color: white;
  &:active {
    background-color: rgb(155, 223, 255);
  }
`;
