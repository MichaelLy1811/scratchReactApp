import React, { Component } from 'react';

import './action-buttons.scss';

/* eslint-disable-next-line */
export interface ActionButtonsProps {}

export class ActionButtons extends Component<ActionButtonsProps> {
  render() {
    return (
      <tr>
        <td>
          <button type="button" className="btn btn-light">
            Add filter
          </button>
        </td>
        <td>
          <button type="button" className="btn btn-light">
            Create
          </button>
        </td>
        <td>
          <button type="button" className="btn btn-light">
            Export
          </button>
        </td>
      </tr>
    );
  }
}

export default ActionButtons;
