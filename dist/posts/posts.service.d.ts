import { Repository } from 'typeorm';
import { PostsModel } from './entity/posts.entity';
export interface PostModel {
    id: number;
    author: string;
    age: number;
}
export declare class PostsService {
    private readonly postsRepository;
    constructor(postsRepository: Repository<PostsModel>);
    getAllPosts(): Promise<PostsModel[]>;
    postPost(author: string, age: number): Promise<PostsModel>;
}
