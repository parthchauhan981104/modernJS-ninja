class Forecast {
  constructor(){
    this.proxyurl = "https://cors-anywhere.herokuapp.com/";
    this.key = '682500PcukwQUtq1UDd6XimUfAmBA5HL';
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }
  async updateCity(city){
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key); //make 2nd request using key from 1st request response
    return { cityDets, weather };
    //used object shorthand notation
    //can be used in case when property and value names are same
    //example - instead of writing
    //{ cityDets: cityDets, weather: weather }
  }
  // get weather information
  async getWeather(id){
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.proxyurl + this.weatherURI + query);
    const data = await response.json();
    return data[0]; //1st  one - closest match
  }
  // get city information
  async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.proxyurl + this.cityURI + query);
    const data = await response.json();
    return data[0]; //1st  one - closest match
  }
}