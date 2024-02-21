import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(): Promise<import("./entity/posts.entity").PostsModel[]>;
    getOnePost(id: string): void;
    postPosts(author: string, age: number): Promise<import("./entity/posts.entity").PostsModel>;
}
