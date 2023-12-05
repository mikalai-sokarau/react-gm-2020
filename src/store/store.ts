import modules from '@app/store/modules';
import { IEvents, IState } from '@app/store/store.interface';
import { createStoreon } from 'storeon';

const store = createStoreon<IState, IEvents>(modules);

export default store;
