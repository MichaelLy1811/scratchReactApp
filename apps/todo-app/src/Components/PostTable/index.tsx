import React from 'react';
import PostRow from '../PostRow';

class PostTable extends React.Component {
  

  state = {
    posts: [
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
      
    ],
  };

  renderData = () => {
    let res = null;
    const dataPost = this.state.posts;
    console.log('aaa', this.state);
    res = dataPost.map((post, index) => {
      return <PostRow key={index} post={post} />;
    });
    return res;
  };

  render() { 
    return (
      <>
        <div className="card card-cascade narrower">
          <div className="px-4">
            <div className="table-wrapper">
              <table className="table table-hover mb-0">
                <thead>
                  <tr>
                    <th>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox"
                      />
                    </th>
                    <th className="th-lg">
                      ID
                      <i className="fas fa-sort ml-1"></i>
                    </th>
                    <th className="th-lg">
                      Post title
                      <i className="fas fa-sort ml-1"></i>
                    </th>
                    <th className="th-lg">
                      Author
                      <i className="fas fa-sort ml-1"></i>
                    </th>
                    <th className="th-lg">
                      Published
                      <i className="fas fa-sort ml-1"></i>
                    </th>
                    <th className="th-lg">
                      Com.
                      <i className="fas fa-sort ml-1"></i>
                    </th>
                    <th className="th-lg">
                      Status
                      <i className="fas fa-sort ml-1"></i>
                    </th>
                    <th className="th-lg">
                      Views
                      <i className="fas fa-sort ml-1"></i>
                    </th>
                    <th className="th-lg"></th>
                    <th className="th-lg"></th>
                  </tr>
                </thead>
                  {this.renderData()}
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PostTable;
