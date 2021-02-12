import { createAction, props } from '@ngrx/store';

export const add = createAction('Add Product', props<{ id: string }>());
export const remove = createAction('Remove product', props<{ id: string }>());

export const inc = createAction('Incremento');

