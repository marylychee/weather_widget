export const NEW_WIDGET = 'NEW_WIDGET';

export const TYPES = {
	WEATHER: 'WEATHER'
}

const DEFAULT_WIDGET = {
	position: {x: 0, y: 0},
	type: null,
	data: {}
};

export function newWeatherWidget () {
	return {
		type: NEW_WIDGET,
		payload: Object.assign({}, DEFAULT_WIDGET, {
			type: TYPES.WEATHER,
			data: {
				location: '',
				lng: null,
				lat: null
			}
		})
	};
}

export function removeWidget () {

}

export function updateWidgetLocation () {}
