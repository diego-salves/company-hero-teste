import { Injectable } from '@nestjs/common';
import SpotifyWebApi = require('spotify-web-api-node');

@Injectable()
export class MusicService {
  private readonly spotifyApi: SpotifyWebApi;

  constructor() {
    this.spotifyApi = new SpotifyWebApi({
      clientId: 'a762cdea047542ddadc529aeeff552d9',
      clientSecret: '661163b7344447ff9c43da53179aea29',
    });

    this.spotifyApi.clientCredentialsGrant().then(data => {
      this.spotifyApi.setAccessToken(data.body['access_token']);
    }).catch(error => {
      console.error('Failed to retrieve access token', error);
    });
  }

  async getMusicSuggestion(temp: number): Promise<string> {
    let genre: string;
    if (temp > 25) genre = 'pop';
    else if (temp >= 10) genre = 'rock';
    else genre = 'classical';

    const playlists = await this.spotifyApi.searchPlaylists(genre, { limit: 10 });
    const playlist = playlists.body.playlists.items[Math.floor(Math.random() * playlists.body.playlists.items.length)];
    
    return playlist ? playlist.external_urls.spotify : 'No playlist found';
  }
}
