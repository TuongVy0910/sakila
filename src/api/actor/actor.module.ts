import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { ActorController } from './actor.controller';
import { ActorService } from './actor.service';
import { Actor } from './entities/actor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Actor])],
  providers: [ActorService],
  controllers: [ActorController],
})
export class ActorModule {}
