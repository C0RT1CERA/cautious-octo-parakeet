"use client";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import ArticleCard from './article_card2';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('articles.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setArticles(data.slice(0, 4)))
      .catch(error => setError(error));
  }, []);

  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      x: [0, -100 * articles.length + '%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: articles.length * 5,
          ease: 'linear',
        },
      },
    });
  };

  useEffect(() => {
    if (articles.length > 0) {
      startAnimation();
    }
  }, [articles]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    startAnimation();
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="relative justify-items-start shadow-2xl bg-blk5 rounded-br-[80px] mx-auto max-w-lg h-[370px] border-4 rounded-tl-[80px] border-blk5 overflow-hidden ">
      <motion.div
        className="absolute flex space-x-4 w-full"
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
      >
        {[...articles, ...articles].map((article, index) => (
          <motion.div key={index} className="flex-none w-full ">
            <Link href={`/blog/${article.name}`} passHref>
              <ArticleCard article={article} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ArticlesList;