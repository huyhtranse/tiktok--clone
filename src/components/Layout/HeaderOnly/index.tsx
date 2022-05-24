import { ChildrenProps } from '~/interface';
import Header from '~/components/Layout/components/Header';

const HeaderOnly = ({ children }: ChildrenProps) => {
  return (
    <div>
      <Header />
      <div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default HeaderOnly;
