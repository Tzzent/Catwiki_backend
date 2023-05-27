import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BreedModule } from './breed/breed.module';
import { HttpModule } from './http/http.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    BreedModule,
    HttpModule,
  ]
})
export class AppModule { }
