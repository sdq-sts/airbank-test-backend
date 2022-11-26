import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { TransactionsModule } from 'src/transactions/transactions.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UUIDResolver, DateTimeResolver } from 'graphql-scalars';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      resolvers: {
        UUID: UUIDResolver,
        DateTime: DateTimeResolver,
      },
      debug: true,
    }),
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
