import { ApiProperty } from '@nestjs/swagger';



export class UserDTO {
    fullname : string;
    email :string;
    github: string;
    linkedin :string
    instagram:string;
    twitter:string;
    bio:string;
    bio_title:string;
    avatar:string;
}