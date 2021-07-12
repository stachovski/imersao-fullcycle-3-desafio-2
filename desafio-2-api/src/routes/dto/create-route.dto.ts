import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateRouteDto {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    startPosition: string;

    @IsString()
    @IsNotEmpty()
    endPosition: string;
}
