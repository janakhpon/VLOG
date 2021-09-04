import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateInput {
  @Field()
  page: number;

  @Field()
  take: number;

  @Field()
  title: string;

  @Field()
  text: string;
}