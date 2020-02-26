import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import withLayout from '../../components/HigherOrderLayout';
import { Index } from '../index';

const TypePage = (): ReactElement => {
  const router = useRouter();
  const { type } = router.query;

  return <Index numberType={type} />;
};

export default withLayout(TypePage);
