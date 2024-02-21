import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts() {
    return this.postsService.getAllPosts();
    //
  }
  @Get('/:id')
  getOnePost(@Param('id') id: string) {
    // const post = posts.find((post) => post.id === +id);
    // if (!post) {
    //   throw new NotFoundException('id가 없어요');
    // }
    // return post;
  }
  ///
  @Post()
  postPosts(
    @Body('author') author: string,
    @Body('age') age: number,
    // @Body() authorId: string,
  ) {
    return this.postsService.postPost(author, age);
  }
}
