import config from 'config/config'
export const initialState = {
    widgets: [{
        status:'pending',
        cityName: 'London',
        weather:'clouds',
        temperature:'99',
        cityCountry: 'uk',
        cityID: '',
        lat: '',
        lng: ''
    }, {
        status:'pending',
        cityName: 'Paris',
        weather:'clouds',
        temperature:'99',
        cityCountry: 'fr',
        cityID: '',
        lat: '',
        lng: ''
    }, {
        status:'pending',
        cityName: 'Montpellier',
        weather:'clouds',
        temperature:'99',
        cityCountry: 'fr',
        cityID: '',
        lat: '',
        lng: ''
    }],
    settings: {
      adding: false,
      cityName:''
    }
};
