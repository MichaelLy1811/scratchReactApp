import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';
import PostTable from '../Components/PostTable';
import PostRow from '../Components/PostRow';
import SearchBar from '../Components/search-bar/search-bar';
import ActionButtons from '../Components/action-buttons/action-buttons';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */

  return (
    <div className="md-form">
      <tr>
        <td>
          <SearchBar />
        </td>
        <td>
          <ActionButtons />
        </td>
      </tr>
      <PostTable />
    </div>
  );
};
export default App;
