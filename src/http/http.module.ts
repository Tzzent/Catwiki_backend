import { HttpModule as AxiosModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [
    AxiosModule.register({
      timeout: 5000,
      maxRedirects: 5,
    })
  ],
  exports: [AxiosModule]
})
export class HttpModule { }
