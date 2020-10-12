import React, { Component } from 'react'
import Input from '../Input/Input';

export default class RegisterForm extends Component {
    state = {
        formData: {
            name: {
                value: "",
                validator: {
                    minLength: 3,
                    maxLength: 6,
                    required: true
                },
                error: { status: true, message: "", isTouched:false }
            },
            phonenumber: {
                value: "",
                validator: {
                    minLength: 10,
                    maxLength: 10
                },
                error: { status: true, message: "", isTouched:false }
            },
            email: {
                value: "",
                validator: {
                    required: true
                },
                error: { status: true, message: "", isTouched:false }
            },
            password: {
                value: "",
                validator: {
                    minLength: 6,
                    maxLength: 24,
                    required: true
                },
                error: { status: true, message: "", isTouched:false }
            },
        },
        isFormValid: false
    };

    checkValue = (value, rules) => {
        let isValid = true;
        let trimmedValue = value.trim();
        let message = "";

        if (rules.required && trimmedValue.length === 0) {
            isValid = false;
            message = 'คุณต้องกรอกช่องนี้';
        };
        if (rules.maxLength && trimmedValue.length > rules.maxLength) {
            isValid = false;
            message = `ช่องนีความยาวต้องไม่เกิน ${rules.maxLength} ตัว`;
        };
        if (rules.minLength && trimmedValue.length < rules.minLength) {
            isValid = false;
            message = `ช่องนีความยาวอย่างน้อย ${rules.minLength} ตัว`;
        };
        return { isValid, message };
    };

    onChangeInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const formUpdate = { ...this.state.formData };//Object spread orperator
        formUpdate[fieldName].value = fieldValue;
        formUpdate[fieldName].error.isTouched = true;
        let { isValid, message } = this.checkValue(e.target.value, formUpdate[fieldName].validator);
        formUpdate[fieldName].error.status = !isValid;
        formUpdate[fieldName].error.message = message;

        let newIsFormValid = true;

        for (let key in formUpdate) {
            if (formUpdate[key].validator.required) {
                newIsFormValid = !formUpdate[key].error.status && newIsFormValid;
            }
        }
        this.setState({
            formData: formUpdate,
            isFormValid: newIsFormValid
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { name, phonenumber, email, password } = this.state.formData;
        const result = {
            name: name.value,
            phonenumber: phonenumber.value,
            email: email.value,
            password: password.value
        };
        console.log(result);
    }
    render() {
        const { name, phonenumber, email, password } = this.state.formData;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="RegisterForm">
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={name.value}
                        name="name"
                        placeholder="ชื่อ"
                        error={name.error}
                    />
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={phonenumber.value}
                        className="Input InputElement"
                        name="phonenumber"
                        placeholder="เบอร์โทรศัพท์"
                        error={phonenumber.error}
                    />
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={email.value}
                        className="Input InputElement"
                        name="email"
                        placeholder="อีเมล์"
                        error={email.error}
                    />
                    <Input
                        onChangeInput={this.onChangeInput}
                        type="password"
                        value={password.value}
                        className="Input InputElement"
                        name="password"
                        placeholder="รหัสผ่าน"
                        error={password.error}
                    />
                    <button disabled={!this.state.isFormValid} htmlFor="submit" className="Button">Register</button>
                </div>
            </form>
        )
    }
}
