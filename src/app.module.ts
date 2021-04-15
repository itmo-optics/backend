import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PointsModule } from './points/points.module'
import { Point } from './points/entities/point.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: `postgres`,
      host: `database`,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Point],
      synchronize: true,
    }),
    PointsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
