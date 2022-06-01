import classNames from 'classnames/bind';
import { ChildrenProps } from '~/interface';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

const Wrapper = ({ children, className }: ChildrenProps) => {
  return <div className={cx('wrapper', className)}>{children}</div>;
};

export default Wrapper;
