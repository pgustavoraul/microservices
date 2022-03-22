import {  IsByteLength } from 'class-validator';
import { IsString } from 'class-validator';
import {  IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  @IsByteLength(0, 150)
  name: string;
}
