import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IntXipt from '../../int_xipt';
import '../css.scss';

class Module extends Component {
    static propTypes = {
        labelText: PropTypes.string,
        className: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.string,
        name: PropTypes.string,
        required: PropTypes.bool,
        placeholder: PropTypes.string,
        children: PropTypes.node,
        handleKeyUp: PropTypes.func,
        handleBlur: PropTypes.func,
        handleClick: PropTypes.func,
        handleChange: PropTypes.func,
        handleFocus: PropTypes.func,
        selectionData: PropTypes.array,
        msgErr: PropTypes.string,
    };
    static defaultProps = {
        type: 'text',
        placeholder: '',
        required: false,
    };

    render() {
        const { className } = this.props;
        const { labelText, ...rest } = this.props;
        const style = cx('int_xifm', className,
            { required: this.props.required },
        );
        return (
            <div className={style}>
                <div className="int-label">
                    <label>
                        {this.props.required ? <span>*</span> : ''}
                        {labelText}
                    </label>
                </div>
                <IntXipt
                    {...rest}
                />
            </div>
        );
    }
}

export default Module;
