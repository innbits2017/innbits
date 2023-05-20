import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import ListBlogs from '@components/blog/ListBlogs';
import BlogHero from '@components/blog/BlogHero';


export default async function Page() {
  const data = await getData();
  return (
    <>
    <BlogHero posts={data}  />
   <ListBlogs posts={data} />
    </>
  )
}



// getData 
async function getData() {
  const blogsDirectory = join(process.cwd(), '_blog');
  const res = fs.readdirSync(blogsDirectory);

  let posts = res.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = join(blogsDirectory, `${slug}.md`);
    const readFile = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  posts = posts.sort((job1, job2) => (job1.frontmatter.date > job2.frontmatter.date ? -1 : 1));

  return posts;
}