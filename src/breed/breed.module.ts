import { Module } from '@nestjs/common';

import { BreedController } from './breed.controller';
import { BreedService } from './breed.service';

@Module({
  controllers: [BreedController],
  providers: [BreedService]
})
export class BreedModule { }
