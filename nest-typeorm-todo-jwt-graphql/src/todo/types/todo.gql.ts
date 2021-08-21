import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SearchInput {
  @Field()
  page: number;

  @Field()
  take: number;

  @Field()
  title: string;

  @Field()
  text: string;
}


@InputType()
export class CreateInput {
  @Field()
  title: string;

  @Field()
  text: string;

  @Field()
  completed: boolean;
}
