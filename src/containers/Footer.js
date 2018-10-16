import React from 'react';
import Link from '../components/Link';
import { connect } from 'react-redux';
import { filters, setVisibilityFilter } from '../actions';

const Footer = (props) => (
    <div>
        <Link onClick={() => { props.dispatch(setVisibilityFilter(filters.SHOW_ALL)) }}> All </Link>
        <Link onClick={() => { props.dispatch(setVisibilityFilter(filters.SHOW_ACTIVE)) }}>Active</Link>
        <Link onClick={() => { props.dispatch(setVisibilityFilter(filters.SHOW_COMPLETED)) }}>Completed</Link>
    </div>
);


export default connect()(Footer);
