import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, ...props }: any, ref) => {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(images.noImage);
  };

  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
