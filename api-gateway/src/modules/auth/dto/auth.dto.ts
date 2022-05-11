import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsString } from "class-validator";

export class AuthDto {
  @ApiProperty()
  @IsString()
  nic: string;

  @ApiProperty()
  @IsString()
  password: string;
}


export class ReadAuthDto {
  @Expose()
  access_token: string;
  @Expose()
  expires_in: number;
  @Expose()
  refresh_expires_in: number;
  @Expose()
  refresh_token: string;
  @Exclude()
  token_type: string;
  @Exclude()
  'not-before-policy': number;
  @Exclude()
  session_state: string;
  @Exclude()
  scope: string;
}
