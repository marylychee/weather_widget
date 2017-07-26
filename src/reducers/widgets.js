import {NEW_WIDGET} from '../actions/widgets.js';
import * as config from '../config.json';

const INITIAL_STATE = config.defaultWidgets;

export function widgets (state = INITIAL_STATE, action) {
	switch (action.type) {
		case NEW_WIDGET:
			return [...state, action.payload];
		default:
			return INITIAL_STATE;
	}
}
