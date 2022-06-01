import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia as IconProp} />,
    title: 'English',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion as IconProp} />,
    title: 'Feedback ans help',
    to: '/keyboard',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard as IconProp} />,
    title: 'Keyboard shortcuts',
  },
];

const Header = () => {
  const [searchResult, setSearchResult] = useState<number[]>([]);

  setTimeout(() => {
    setSearchResult([]);
  }, 0);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="tiktok" />
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark as IconProp} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner as IconProp} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}>
          <Button text>Upload</Button>
          <Button primary>Log in</Button>
          <Menu items={MENU_ITEMS}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical as IconProp}></FontAwesomeIcon>
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
