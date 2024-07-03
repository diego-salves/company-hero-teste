import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicService {
  getMusicSuggestion(temp: number): string {
    if (temp > 25) return `Pop ${temp}`;
    if (temp >= 10) return `Rock ${temp}`;
    return `Clássica ${temp}`;
  }
}
