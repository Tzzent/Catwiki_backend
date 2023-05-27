import { Controller, Get, Param, Query } from '@nestjs/common';
import { BreedService } from './breed.service';

@Controller('breeds')
export class BreedController {
  constructor(private readonly breedService: BreedService) { }

  @Get('search')
  searchBreed(@Query('limit') limit: number, @Query('page') page: number) {
    return this.breedService.searchBreed(limit, page);
  }

  @Get('top')
  topBreeds(@Query('limit') limit: number, @Query('page') page: number) {
    return this.breedService.topBreeds(limit, page);
  }

  @Get(':id')
  getBreedById(@Param('id') id: string) {
    return this.breedService.getBreedById(id);
  }

}