import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsModel } from './entity/posts.entity';

export interface PostModel {
  id: number;
  author: string;
  age: number;
}

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsModel)
    private readonly postsRepository: Repository<PostsModel>,
    // error -> posts.module.ts -> TypeOrmModule.forFeature([PostsModel])   PostsModule아님
  ) {}
  getAllPosts() {
    return this.postsRepository.find({});
  }

  async postPost(author: string, age: number) {
    const post = this.postsRepository.create({ author, age });
    const newPost = await this.postsRepository.save(post);
    return newPost;
  }
}
//
