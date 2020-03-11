import { Component } from 'react';
import { getCookie } from '../_helpers/cookie';

class PrivateRoute extends Component {
    state = {
        auth: getCookie ? getCookie || null
    }

    static async getInitialProps(ctx) {

    }
}