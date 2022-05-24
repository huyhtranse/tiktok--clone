import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Header = () => {
  const [searchResult, setSearchResult] = useState<number[]>([]);

  setTimeout(() => {
    setSearchResult([1, 3, 4]);
  }, 0);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="tiktok" />
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <PopperWrapper>
              <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                Ket qua
              </div>
            </PopperWrapper>
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
        <div className=""></div>
      </div>
    </header>
  );
};

export default Header;
