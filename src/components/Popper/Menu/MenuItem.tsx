import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

const MenuItem = ({ data }: any) => {
  return (
    <Button classNames={cx('menu-item')} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
};

export default MenuItem;
