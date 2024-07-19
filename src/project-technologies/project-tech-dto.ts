import { ApiProperty } from "@nestjs/swagger"

export class ProjectTechDto {
@ApiProperty()   
 icon :string
 @ApiProperty()
 Name : string
 @ApiProperty()
 ProjectId: string
}