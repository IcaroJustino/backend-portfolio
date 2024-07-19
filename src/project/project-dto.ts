import { ApiProperty } from "@nestjs/swagger"

export class ProjectDTO{
    @ApiProperty()
    title:string
    @ApiProperty()
    description:string
    @ApiProperty()
    thumbnail:string
    @ApiProperty()
    link_github:string
    @ApiProperty()
    link_deploy:string
    @ApiProperty()
    userId:any
}