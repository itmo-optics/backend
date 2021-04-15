import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common'
import { PointsService } from './points.service'
import { CreatePointDto } from './dto/create-point.dto'
import { UpdatePointDto } from './dto/update-point.dto'

@Controller(`points`)
export class PointsController {
  constructor(private readonly pointsService: PointsService) {}

  @Post()
  create(@Body() createPointDto: CreatePointDto) {
    return this.pointsService.create(createPointDto)
  }

  @Get()
  findAll() {
    return this.pointsService.findAll()
  }

  @Get(`:id`)
  findOne(@Param(`id`) id: string) {
    return this.pointsService.findOne(+id)
  }

  @Patch(`:id`)
  update(@Param(`id`) id: string, @Body() updatePointDto: UpdatePointDto) {
    return this.pointsService.update(+id, updatePointDto)
  }

  @Delete(`:id`)
  @HttpCode(204)
  remove(@Param(`id`) id: string) {
    return this.pointsService.remove(+id)
  }
}
