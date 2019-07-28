import Layout from '../components/Layout';

export const withLayout = (Component: any) => (props: any) => (
  <Layout>
    <Component {...props} />
  </Layout>
);
