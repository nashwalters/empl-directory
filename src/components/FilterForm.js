import React from 'react';

<div>
        <div>
          <label htmlFor="position">Filter by position:</label>
          <select onChange={this.handlePositionChange} id="position">
            <option value="All">All</option>
            <option value="KOAM">KOAM</option>
            <option value="News">News</option>
            <option value="Sound Engineer">Sound Engineer</option>
            <option value="Executive Producer">Executive Producer</option>
            <option value="Producer">Producer</option>
            <option value="Sales Manager">Sales Manager</option>
            <option value="Security">Security</option>
            <option value="Music Engineer">Music Engineer</option>
            <option value="Tech Support">Tech Support</option>
          </select>
        </div>