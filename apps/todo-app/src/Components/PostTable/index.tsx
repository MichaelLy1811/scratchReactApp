import React from 'react';

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

class PostTable extends React.Component {
  render() {
    return (
      <>
        <div className="card card-cascade narrower">
          <div className="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">
            <div>
              <button
                type="button"
                className="btn btn-outline-white btn-rounded btn-sm px-2"
              >
                <i className="fas fa-th-large mt-0"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-white btn-rounded btn-sm px-2"
              >
                <i className="fas fa-columns mt-0"></i>
              </button>
            </div>

            <a className="white-text mx-3">Table name</a>

            <div>
              <button
                type="button"
                className="btn btn-outline-white btn-rounded btn-sm px-2"
              >
                <i className="fas fa-pencil-alt mt-0"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-white btn-rounded btn-sm px-2"
              >
                <i className="far fa-trash-alt mt-0"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-white btn-rounded btn-sm px-2"
              >
                <i className="fas fa-info-circle mt-0"></i>
              </button>
            </div>
          </div>

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
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PostTable;
