const ArticleCard = ({ article }) => {
    return (
      <article className="overflow-hidden bg-blk1">
        <img
          alt={article.title}
          src={article.imageUrl}
          className="h-56 w-full object-cover"
        />
        <div className="p-4 sm:p-6 bg-wit2 shadow-lg">
          <a href={article.url}>
            <h3 className="text-lg font-medium text-c1 ">
              {article.title}
            </h3>
          </a>
          <p className="mt-2 line-clamp-3 text-sm text-y31">
            {article.content}
          </p>
          <a href={article.url} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-c2 cursor-pointer">
            Find out more
            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5">
              &rarr;
            </span>
          </a>
        </div>
      </article>
    );
  };
  
  export default ArticleCard;
  