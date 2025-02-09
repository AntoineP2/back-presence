import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  trigramme: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
