import { InputType, Field, ObjectType } from '@nestjs/graphql';

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

@ObjectType()
export class TodoObject {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  text: string;

  @Field()
  completed: boolean;
}

@ObjectType()
export class TodoID {
  @Field()
  id: number;
}