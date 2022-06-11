import { forwardRef } from 'react';

const Image = forwardRef(({ ...props }: any, ref) => {
  return <img ref={ref} {...props} />;
});

export default Image;
