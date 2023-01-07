import PropTypes from "prop-types";
import styled from "styled-components";

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

const Message = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

Notification.propTypes = {
  message: PropTypes.string,
};
