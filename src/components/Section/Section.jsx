import { Box } from 'components/utils/Box.styled';

export const Section = ({ title = '', children }) => {
  return (
    <Box as="section">
      <Box as="h2">{title}</Box>
      {children}
    </Box>
  );
};
