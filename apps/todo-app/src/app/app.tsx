import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';
import PostTable from '../Components/PostTable';
import PostRow from '../Components/PostRow';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */

  return <PostTable />;

  const POSTS = [
    {
      id: '01',
      title: 'this is title',
      author: 'michael',
      status: 'published',
      publishedDate: '01/01/2020',
      com: true,
      views: 1000,
    },
    {
      id: '02',
      title: 'this is second title',
      author: 'michael',
      status: 'published',
      publishedDate: '02/02/2020',
      com: true,
      views: 2000,
    },
  ];
};

export default App;
