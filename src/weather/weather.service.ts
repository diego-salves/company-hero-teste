import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  private readonly apiKey = 'dfb97f3a370da80b6a89a155c953fac6';

  async getCoordinates(city: string): Promise<{ lat: number, lon: number }> {
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}`);
    const data = response.data[0];
    return { lat: data.lat, lon: data.lon };
  }

  async getTemperature(city: string): Promise<number> {
    const { lat, lon } = await this.getCoordinates(city);
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`);
    return response.data.main.temp;
  }
}
