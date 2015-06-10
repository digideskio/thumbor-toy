/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component, PropTypes } from 'react';


class Control extends Component {}

Control.propTypes = {
    onChange: PropTypes.func.isRequired,
    setting:  PropTypes.shape({
        key:   PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired
};

Control.defaultProps = {
    wrapperClass: 'control-group'
};

export default Control;