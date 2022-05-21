import { ChildrenProps } from '~/interface';
import Header from '~/components/Layout/components/Header';

const DefaultLayout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <Header />
      <div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
