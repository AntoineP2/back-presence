import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserRole } from './userRole.model';

@ObjectType()
export class Role {
  @Field(() => ID)
  roleId: number;

  @Field()
  roleName: string;

  @Field(() => [UserRole])
  UserRoles: UserRole[];
}
