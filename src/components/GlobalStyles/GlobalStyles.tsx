import PropTypes from 'prop-types';
import { ChildrenProps } from '~/interface';
import './GlobalStyles.scss';

const GlobalStyles = ({ children }: ChildrenProps) => {
  return children;
};

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
