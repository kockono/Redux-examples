import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar } from './todo.actions';

export const estadoInicial:Todo[] = [

];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear,  (state, { texto } ) => [...state, new Todo( texto )] ), // Extrae c/u de los items y regresalos independientemente
  on(toggle, (state, { id } ) => {

    return state.map( todo => {

      if( todo.id === id) { // De no ser la misma id no podra cambiarlo
        return {
          ...todo, // Deja todas la propiedades igual pero el completado cambialo a lo contrario
          completado: !todo.completado
        }
      } else {
        return todo;
      }

    });
  }),

  on(editar, (state, { id, texto } ) => {

    return state.map( todo => {

      if( todo.id === id) { // De no ser la misma id no podra cambiarlo
        return {
          ...todo, // Deja todas la propiedades igual pero el completado cambialo a lo contrario
          texto: texto
        }
      } else {
        return todo;
      }

    });
  }),



);




export function todoReducer(state:any, action:any) {
  return _todoReducer(state, action);
}
