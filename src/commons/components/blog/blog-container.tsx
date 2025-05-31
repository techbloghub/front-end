'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import BlogCard from './blog-card';
import { Skeleton } from '@/commons/components/ui/skeleton';
import { mockBlogs } from '@/commons/lib/mock-data';

export default function BlogContainer() {
  const [blogs, setBlogs] = useState(mockBlogs.slice(0, 12));
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastBlogElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreBlogs();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  const loadMoreBlogs = () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      const nextPage = page + 1;
      const startIndex = page * 12;
      const endIndex = startIndex + 12;
      const newBlogs = mockBlogs.slice(startIndex, endIndex);

      if (newBlogs.length === 0) {
        setHasMore(false);
      } else {
        setBlogs((prevBlogs) => [...prevBlogs, ...newBlogs]);
        setPage(nextPage);
      }
      setLoading(false);
    }, 800);
  };

  // Reset when filters change
  useEffect(() => {
    setBlogs(mockBlogs.slice(0, 12));
    setPage(1);
    setHasMore(true);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog, index) => {
        if (blogs.length === index + 1) {
          return (
            <div ref={lastBlogElementRef} key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          );
        } else {
          return <BlogCard key={blog.id} blog={blog} />;
        }
      })}

      {loading && (
        <>
          <div>
            <Skeleton className="h-[340px] w-full rounded-xl" />
          </div>
          <div className="hidden sm:block">
            <Skeleton className="h-[340px] w-full rounded-xl" />
          </div>
          <div className="hidden lg:block">
            <Skeleton className="h-[340px] w-full rounded-xl" />
          </div>
        </>
      )}
    </div>
  );
}
