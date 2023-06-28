import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

    @Get('/health')
    getHealth(): string {
      return 'Health check passed!';
    }

    @Get('/hello')
    getHello(): string {
      return 'Hello, Nest.js!';
    }
}
