'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, ExternalLink, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/commons/lib/types';
import { Badge } from '@/commons/components/ui/badge';
import { formatDate } from '@/commons/lib/utils';
import { Button } from '@/commons/components/ui/button';

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="rounded-xl overflow-hidden bg-card border border-border h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority={false}
        />
        <div className="absolute top-2 left-2">
          <Badge className="bg-primary/90 backdrop-blur-sm hover:bg-primary">{blog.company}</Badge>
        </div>
      </div>

      <div className="flex-1 p-4 flex flex-col">
        <div className="flex items-center text-xs text-muted-foreground mb-2 gap-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(blog.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {blog.readTime} min read
          </span>
        </div>

        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{blog.title}</h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{blog.excerpt}</p>

        <div className="flex flex-wrap gap-1 mt-auto mb-3">
          {blog.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {blog.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{blog.tags.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${isLiked ? 'text-red-500' : ''}`}
            onClick={() => setIsLiked(!isLiked)}
            aria-label={isLiked ? 'Unlike' : 'Like'}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-current text-red-500' : ''}`} />
          </Button>

          <Button variant="outline" size="sm" className="gap-1.5" onClick={() => window.open(blog.url, '_blank')}>
            Read Post
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
