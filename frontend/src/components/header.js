import React from 'react';
import {Link} from 'react-router-dom';
const header = () => {
return (
<div className="topnav navbar-fixed-top">
  <Link className="active header" to="/">TheDictionary.in</Link>
</div>
);
}

export default header;