import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { CreatePointDto } from './dto/create-point.dto'
import { UpdatePointDto } from './dto/update-point.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Point } from './entities/point.entity'
import { Repository } from 'typeorm'

@Injectable()
export class PointsService {
  constructor(
    @InjectRepository(Point)
    private pointsRepository: Repository<Point>,
  ) {}

  async create(createPointDto: CreatePointDto) {
    try {
      return await this.pointsRepository.save(createPointDto)
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  findAll() {
    return this.pointsRepository.find()
  }

  async findOne(id: number) {
    const point = await this.pointsRepository.findOne(id)
    if (!point) throw new NotFoundException(`Venue with id ${id} doesn't exist`)
    return point
  }

  async update(id: number, updatePointDto: UpdatePointDto) {
    try {
      return await this.pointsRepository.save({ ...updatePointDto, id })
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  async remove(id: number) {
    await this.pointsRepository.delete(id)
  }
}
