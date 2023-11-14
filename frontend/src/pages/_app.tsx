import React from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Layout from '../widgets/layout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
};
export default MyApp;
