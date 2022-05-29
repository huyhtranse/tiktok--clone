import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { ChildrenProps } from '~/interface';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
        alt="Hoa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle as IconProp} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
};

export default AccountItem;
