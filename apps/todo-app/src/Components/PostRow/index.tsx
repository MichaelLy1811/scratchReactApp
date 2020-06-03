import React from 'react';

class PostRow extends React.Component {
    render() {
        return (
            <div>
                <tbody>
          <tr>
            <th scope="row">
              <input className="form-check-input" type="checkbox" id="checkbox1"/>
              <label className="form-check-label"></label>
            </th>
            <td>01</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
                <button>Edit</button>
            </td>
            <td>
                <button>Show</button>
            </td>
          </tr>
        </tbody>
            </div>
        )
    }
}

export default PostRow;