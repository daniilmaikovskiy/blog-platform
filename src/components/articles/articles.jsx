import React from 'react';
import { wrapper } from './articles.module.scss';
import Article from '../article';

const Articles = () => {
  return (
    <div className={wrapper}>
      <Article id="1" isExtended={false} />
      <Article id="2" isExtended={false} />
      <Article id="3" isExtended={false} />
      <Article id="4" isExtended={false} />
      <Article id="5" isExtended={false} />
    </div>
  );
};

export default Articles;
