import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { env } from 'process';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [GraphQLModule.forRoot({
    debug: process.env.NODE_ENV !== 'production',
    playground: process.env.NODE_ENV !== 'production',
  }), BooksModule],
})
export class ApiModule {}
