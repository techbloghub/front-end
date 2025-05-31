import BlogContainer from '@/commons/components/blog/blog-container';
import SearchBar from '@/commons/components/search/search-bar';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight">TechBlogHub</h1>
          <p className="mt-2 text-lg text-muted-foreground">Discover the latest insights from top tech company blogs</p>
        </div>
        <SearchBar />
      </section>
      <BlogContainer />
    </div>
  );
}
