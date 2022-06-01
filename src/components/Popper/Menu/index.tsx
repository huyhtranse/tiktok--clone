import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

interface MenuProps {
  children: any;
  items: any[];
}

const cx = classNames.bind(styles);

const Menu = ({ children, items = [] }: MenuProps) => {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
