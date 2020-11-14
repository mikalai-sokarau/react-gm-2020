import { StoreonStore } from 'storeon';
import { IState, IEvents } from '@app/store/store.interface';

export interface IApp {
  Router: any,
  store: StoreonStore<IState, IEvents>,
  classes: { [key: string]: string },
  location?: string,
  context?: any,
}

export default IApp;
