import { ChildrenProps } from '~/interface';
import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
