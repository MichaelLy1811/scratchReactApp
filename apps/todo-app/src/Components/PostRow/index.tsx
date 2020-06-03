import React from 'react';

const { post } = this.props;
const { checked } = this.state;

class PostRow extends React.Component {
  render() {
    return (
      <div>
        <tbody>
          <tr>
            <th scope="row">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkbox1"
              />
              <label className="form-check-label"></label>
            </th>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.author}</td>
            <td>{post.status}</td>
            <td>{post.publishedDate}</td>
            <td>{post.com}</td>
            <td>{post.views}</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Show</button>
            </td>
          </tr>
        </tbody>
      </div>
    );
  }
}

export default PostRow;
