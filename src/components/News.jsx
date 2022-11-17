import { useState } from 'react';
import axios from 'axios';

const News=()=>{
    const [post, setpost] = useState(null);
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=013dbb3d89c24f698d552591dbb341bc').then((response)=>{
    setpost(response.data.articles);
    });
    if (!post) return null;
    return (
      <div>
        {post.map((articles) =>
          <p>{articles.title}</p>
        )}
      </div>
      );
}
export default News;