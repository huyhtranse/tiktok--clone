import { useRef, useState, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import * as searchServices from '~/apiServices/searchServices';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks/index';

const cx = classNames.bind(styles);

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const debounceValue = useDebounce(searchValue, 600);

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const res = await searchServices.search(debounceValue);

      setSearchResult(res);
      setLoading(false);
    };

    fetchApi();
  }, [debounceValue]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e: any) => {
    const searchValue = e.target.value;
    if (searchValue.startsWith(' ')) {
      return;
    }
    setSearchValue(searchValue);
  };

  const handleSubmit = () => {};

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result: any) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search accounts and videos"
          spellCheck={false}
          value={searchValue}
          onChange={(e) => handleChange(e)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button
            className={cx('clear')}
            onClick={() => {
              setSearchValue('');
              setSearchResult([]);
              inputRef.current?.focus();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark as IconProp} />
          </button>
        )}

        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner as IconProp} />}

        <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
