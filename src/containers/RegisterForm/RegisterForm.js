import React, { Component } from 'react'

export default class RegisterForm extends Component {
    state = {
        name: "",
        phonenumber: "",
        email: "",
        password: ""
    };

    onChangeInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        console.log("fieldName", fieldName, "fieldValue", fieldValue);
        this.setState({
            [fieldName]: fieldValue
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { name, phonenumber, email, password } = this.state;
        const result = {
            name,
            phonenumber,
            email,
            password
        };
        console.log(result);
    }
    render() {
        const { name, phonenumber, email, password } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="RegisterForm">
                    <input value={name} onChange={this.onChangeInput} className="Input InputElement" name="name" placeholder="ชื่อ" />
                    <input value={phonenumber} onChange={this.onChangeInput} className="Input InputElement" name="phonenumber" placeholder="เบอร์โทรศัพท์" />
                    <input value={email} onChange={this.onChangeInput} className="Input InputElement" name="email" placeholder="อีเมล์" />
                    <input type="password" value={password} onChange={this.onChangeInput} className="Input InputElement" name="password" placeholder="รหัสผ่าน" />
                    <button htmlFor="submit" className="Button">Register</button>
                </div>
            </form>
        )
    }
}
