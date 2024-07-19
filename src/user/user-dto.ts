import { ApiProperty } from '@nestjs/swagger';



export class UserDTO {
    @ApiProperty()
    fullname : string;
    @ApiProperty()
    email :string;
    @ApiProperty()
    github: string;
    @ApiProperty()
    linkedin :string
    @ApiProperty()
    instagram:string;
    @ApiProperty()
    twitter:string;
    @ApiProperty()
    bio:string;
    @ApiProperty()
    biotitle:string;
    @ApiProperty()
    avatar:string;
}