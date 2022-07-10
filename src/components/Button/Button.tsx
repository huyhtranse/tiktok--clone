import PropTypes from 'prop-types';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

interface ButtonProps {
  to?: string;
  href?: string;
  children?: ReactNode;
  onClick?: EventListener | any;
  primary?: boolean;
  outline?: boolean;
  rounded?: boolean;
  small?: boolean;
  large?: boolean;
  text?: boolean;
  classNames?: any;
  leftIcon?: any;
  rightIcon?: any;
  disabled?: boolean;
}
const cx = classNames.bind(styles);

const Button = ({
  to,
  href,
  primary,
  outline,
  small,
  large,
  text,
  rounded,
  disabled,
  children,
  classNames,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}: ButtonProps) => {
  let Comp = 'button' as any;
  const props: any = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    [classNames]: classNames,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  classNames: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
