import React from 'react';

const axios = require('axios').default;


class PostRow extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         post : []
    //     }
    // }

    // axios.get('')

    // componentDidMount() {
    //     fetch("http://localhost:3000/posts")
    //     .then(response => response.json())
    //     .then(response => {
    //         this.setState({
    //             post : response
    //         })
    //         console.log('abc', response)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }
    
  render() {
  
    const { post } = this.props;
    return (
  
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
            <td>{post.publishedDate}</td>
            <td>{post.com}</td>
            <td>{post.status}</td>
            <td>{post.views}</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Show</button>
            </td>
          </tr>
        </tbody>

    );
  }
}

export default PostRow;
