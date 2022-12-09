import { IsNotEmpty, Length } from 'class-validator';

export class CreateMemberBody {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;
  function: string;
}
