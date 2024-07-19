import { ApiProperty } from "@nestjs/swagger"



export class TehKnolegeDto {
    @ApiProperty()
    title:string
    @ApiProperty()
    icon:string
    @ApiProperty()
    userId:string
}