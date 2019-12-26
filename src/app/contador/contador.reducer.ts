// import { actions, DECREMENTAR, INCREMENTAR, MULTIPLICAR, DIVIDIR, RESET } from './contador.actions';

import * as fromActions from './contador.actions';
export function contadorReducer(state: number = 10, action: fromActions.actions) {
    switch (action.type) {
        case fromActions.INCREMENTAR:
            return state + 1;

        case fromActions.DECREMENTAR:
            return state - 1;

        case fromActions.MULTIPLICAR:
            return state * action.payload;

        case fromActions.DIVIDIR:
            return state / action.payload;

        case fromActions.RESET:
            return state = 0;

        default:
        return state;
    }
}
