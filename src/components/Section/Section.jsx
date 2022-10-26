import { Box } from 'components/utils/Box.styled';
import { PropTypes } from 'prop-types';

export const Section = ({ title = '', children }) => {
  return (
    <Box as="section" fontSize="24px" fontWeight="700">
      <Box as="h2">{title}</Box>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
