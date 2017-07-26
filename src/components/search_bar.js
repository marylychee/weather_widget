import React, { Component } from 'react';


class SearchBar extends Component {

  geolocate = () => {
    /*eslint-disable */
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
              center: geolocation,
              radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
          });
        }
        /*eslint-enable */
      }

  componentDidMount () {
    this.initAutoComplete();
  }

  initAutoComplete() {
    /*eslint-disable */
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        this.input,
        {types: ['geocode']});

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', function () {
      var place = autocomplete.getPlace();
      
      var lat = place.geometry.location.lat();
      var lng = place.geometry.location.lng();
      
      console.log(lng, lat);
    });
    /*eslint-enable */
  }

  render() {
    return (
      <div>
        <input
          placeholder="Enter your address"
          type="text"
          onFocus="geolocate()"
          ref={input => this.input = input} />
      </div>
    );
  }

}

export default SearchBar;
