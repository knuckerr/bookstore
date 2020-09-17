import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const SimpleBreadcrumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
       Home
      </Link>
      <Link color="inherit" href="/add">
       Add
      </Link>
    </Breadcrumbs>
  );
}
export default SimpleBreadcrumbs;
