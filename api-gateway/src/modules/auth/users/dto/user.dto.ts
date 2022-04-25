import { PartialType } from "@nestjs/mapped-types";

export class CreateUserDto {
  nic: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number;
}
