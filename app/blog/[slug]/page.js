import BlogDetails from '@components/blog/BlogDetails';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export const dynamicParams = true;


const blogsDirectory = join(process.cwd(), '_blog');
const files = fs.readdirSync(blogsDirectory);


export async function getStaticPaths() {
    const paths = files.map((fileName) => ({
        params: {
          slug: fileName.replace('.md', ''),
        },
      }));
  // console.log(paths, "paths");
    return {
        paths,
      fallback: false, 
    };
  }


 // `getStaticPaths` requires using `getInitialProps`

async function getPost({slug}) {
  // console.log(slug, "params");
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(blogsDirectory, `${realSlug}.md`);
  const readFile = fs.readFileSync(fullPath, 'utf8');
 
  let posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = join(blogsDirectory, `${slug}.md`);
    const readFile = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });
  
  
  const { data: frontmatter, content } = matter(readFile);
  
  posts = posts.sort((job1, job2) => (job1.frontmatter.date > job2.frontmatter.date ? -1 : 1));
  console.log(posts, "fileNamefileName");
  return {
      posts,
      frontmatter,
      content,
  };
}


export default async function Page({params}) {
  
  const postList = await getPost(params);
  const { posts, frontmatter, content } = postList;
  
  return (
    <>
    <BlogDetails posts={posts} frontmatter={frontmatter} content={content} />
    </>
  )
}

