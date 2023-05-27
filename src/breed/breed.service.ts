import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BreedService {
  constructor(private readonly httpService: HttpService) { }

  async searchBreed(limit = 10, page = 0) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${page}`)
      );
      return data.map(breed => (
        {
          id: breed.id,
          name: breed.name,
          reference_image_id: breed.reference_image_id,
        }
      ));

    } catch (error) {
      console.error(`Something went wrong: ${error}`);
      return [];
    }
  };

  async topBreeds(limit = 4, page = 0) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${page}`)
      );

      return data;
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
      return [];
    }
  };


  async getBreedById(id: string) {
    try {
      const { data: breedData } = await firstValueFrom(
        this.httpService.get(`https://api.thecatapi.com/v1/images/${id}`)
      );
      const { data: breedImages } = await firstValueFrom(
        this.httpService.get(`https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${breedData?.breeds[0]?.id}`)
      );

      const breedObjt = breedData?.breeds[0];
      breedData.breed = breedObjt;
      delete breedData.breeds;

      return {
        ...breedData,
        images: breedImages
      };
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
      return {};
    }
  };
}
