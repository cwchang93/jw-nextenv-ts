import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import '../css.scss';

class Module extends Component {
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string,
        placeholder: PropTypes.string,
        children: PropTypes.node,
        onKeyUp: PropTypes.func,
        onBlur: PropTypes.func,
        onClick: PropTypes.func,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        selectionData: PropTypes.array,
        msgErr: PropTypes.string,
        border: PropTypes.bool,
    };


    static defaultProps = {
        type: 'text',
        placeholder: '',
        border: true,
    };
    createSelectOptions(selectionData) {
        const { value } = this.props;
        const arr = [];
        selectionData &&
            this.props.selectionData.forEach((item, index) => {
                arr.push(
                    <option
                        text={item.text}
                        value={item.value}
                        key={`sel_${item.value}_${index}`}
                        selected={(parseInt(item.value) === parseInt(value) ? 'selected' : '')}
                    >
                        {item.text}
                    </option>
                );
            });
        return arr;
    }

    renderSelect(data) {
        return (
            <select onChange={(e) => this.onChange(e)}>
                {this.createSelectOptions(data)}
            </select>
        );
    }
    renderRadio(data) {
        const { name, children, value, border } = this.props;
        const inputClass = cx({
            borderNone: !border, // border true => 有border => 沒有borderNone
        });
        const arr = [];
        data &&
            data.forEach((item, index, ) => {
                // console.log(value, item.text, item.value, parseInt(value) === item.value);
                arr.push(
                    <label key={`lbl_${index}_${value}`}>
                        <input
                            className={inputClass}
                            name={name}
                            type="radio"
                            value={item.value}
                            checked={parseInt(value) === item.value}
                            onChange={(e) => this.onChange(e)}
                        />
                        <span className="indicator" />
                        <span className="control-text">{item.text}</span>
                        {children}
                    </label>
                );
            });
        return arr;
    }
    renderCheckbox(data) {
        const { name, border } = this.props;
        const inputClass = cx({
            borderNone: !border, // border true => 有border => 沒有borderNone
        });
        const arr = [];
        data &&
            data.forEach((item, index) =>
                arr.push(
                    <label key={`lbl_${index}`}>
                        <input
                            className={inputClass}
                            name={name}
                            type="checkbox"
                            value={item.value}
                            onChange={(e) => this.onChange(e)}
                        />
                        <span className="control-text">{item.text}</span>
                    </label>
                )
            );
        return arr;
    }
    renderErrMsg(msg) {
        return msg ? <p className="msg">{msg}</p> : '';
    }
    onChange(e) {
        this.props.onChange && this.props.onChange(e);
    }
    onClick(e) {
        this.props.onClick && this.props.onClick(e);
    }
    onKeyUp(e) {
        this.props.onKeyUp && this.props.onKeyUp(e);
    }
    onBlur(e) {
        this.props.onBlur && this.props.onBlur(e);
    }
    onFocus(e) {
        this.props.onFocus && this.props.onFocus(e);
    }
    render() {
        // const { className, type } = this.props;
        const { className, type, msgErr, selectionData, children, border, ...rest } = this.props;
        const style = cx('int_xipt', 'int-control',
            {
                labelText: type === 'labelText',
                [`borderNone`]: !border,
            }, className);

        const inputClass = cx({
            borderNone: !border, // border true => 有border => 沒有borderNone
        });

        switch (type) {
            case 'select':
                return (
                    <div className={style}>
                        {this.renderSelect(selectionData)}
                        {children}
                        {this.renderErrMsg(msgErr)}
                    </div>
                );
            case 'radio':
                return (
                    <div className={style}>
                        {this.renderRadio(selectionData)}
                        {this.renderErrMsg(msgErr)}
                    </div>
                );
            case 'checkbox':
                return (
                    <div className={style}>
                        {this.renderCheckbox(selectionData)}
                        {children}
                        {this.renderErrMsg(msgErr)}
                    </div>
                );
            case 'textarea':
                return (
                    <div className={style}>
                        <textarea
                            {...rest}
                            onBlur={(e) => this.onBlur(e)}
                            onChange={(e) => this.onChange(e)}
                            onFocus={(e) => this.onFocus(e)}
                            onKeyUp={(e) => this.onKeyUp(e)}
                        />
                        {children}
                        {this.renderErrMsg(msgErr)}
                    </div>
                );
            case 'labelText':
                return (
                    <div className={style}>
                        <p
                            {...rest}
                        >
                            {this.props.value}
                        </p>
                    </div>
                );
            case 'custom':
                return (
                    <React.Fragment>
                        {children}
                    </React.Fragment>
                );
            default:
                return (
                    <div className={style}>
                        <input
                            className={inputClass}
                            type={type}
                            {...rest}
                            onBlur={(e) => this.onBlur(e)}
                            onChange={(e) => this.onChange(e)}
                            onFocus={(e) => this.onFocus(e)}
                            onKeyUp={(e) => this.onKeyUp(e)}
                        />
                        {children}
                        {this.renderErrMsg(msgErr)}
                    </div>
                );
        }
    }
}

export default Module;
