import React from 'react';
import { Row, Col } from 'reactstrap';

import './ContentContainer.scss';
import '../../index.scss';
import { Menu, MenuItem, Action } from '../Menu/Menu';
import Info from '../Info/Info';
import List from '../List/List';
import Content from '../Content/Content';

import '../Content/Content.scss';
import { IconSize } from '../Icon/Icon';

export default class ContentContainer extends React.PureComponent {


    render() {
        return (
            <Row noGutters className="content-container" >


            </Row>
        );
    }
}