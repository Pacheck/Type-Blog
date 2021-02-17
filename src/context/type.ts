export interface ISinglePost {
    title: string;
}
export interface IBlogPost {
    data: ISinglePost[];
    addBlogPost: () => void;
}