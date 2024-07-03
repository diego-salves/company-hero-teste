import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WeatherModule } from './weather/weather.module';
import { MusicModule } from './music/music.module';

@Module({
  imports: [WeatherModule, MusicModule],
  controllers: [AppController],
})
export class AppModule {}
