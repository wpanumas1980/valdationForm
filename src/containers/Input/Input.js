import React, { Component } from 'react'

export default class Input extends Component {
    getClassCss = () => {
        let cssClass = "Input InputElement";
        if(this.props.error.status && this.props.error.isTouched){
            cssClass += " Invalid";
        }
        return cssClass;
    }
    render() {
        const {value, onChangeInput, name, placeholder} = this.props;
        return (
            <>
                <input 
                value={value} 
                onChange={onChangeInput}
                className={this.getClassCss()} 
                name={name} 
                placeholder={placeholder} />
                <p className="ErrorMessage">{this.props.error.message}</p>
            </>
        )
    }
}
