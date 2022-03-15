import {
  BadRequestException,
  ConflictException,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

export function manageErrors(nombreMS, error) {
  if (
    error?.statusCode == HttpStatus.INTERNAL_SERVER_ERROR ||
    !error?.statusCode
  )
    throw new InternalServerErrorException(`${nombreMS}: ${error?.message}`);

  if (error?.statusCode == HttpStatus.NOT_FOUND)
    throw new NotFoundException(`${nombreMS}: ${error.message}`);

  if (error?.statusCode == HttpStatus.CONFLICT)
    throw new ConflictException(`${nombreMS}: ${error.message}`);

  if (error?.statusCode == HttpStatus.BAD_REQUEST)
    throw new BadRequestException(`${nombreMS}: ${error.message}`);
}
