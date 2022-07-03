import styles from './DefaultLayout.module.scss';
import { ChildrenProps } from '~/interface';
import Header from '~/layouts/components/Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }: ChildrenProps) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
