import { I18nProps } from '../server/i18n';

export default interface NextComponent<T = I18nProps> extends React.SFC<T> {
  getInitialProps?: (ctx: any) => Promise<T>;
}
