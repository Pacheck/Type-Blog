import React, { createContext, useState } from 'react';
import { IBlogPost, ISinglePost } from './type';

// const BlogContext = createContext<IBlogPost[]>([]);
const BlogContext = createContext<IBlogPost>({
  data: [{ title: 'Teste' }],
  addBlogPost: () => null,
});

export const BlogProvider = ({ children }: any) => {
  const [blogPosts, setBlogPosts] = useState<ISinglePost[]>([
    { title: 'Blog Post #1' },
  ]);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
