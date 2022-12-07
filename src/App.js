import { Component } from "react";

const INITIAL_STATE = {
  login: "",
  email: "",
  languages: []
};

export default class Form extends Component {
  state = {
    ...INITIAL_STATE
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.login && this.state.email && this.state.languages.length !== 0){
      this.setState({ ...INITIAL_STATE });
      console.log(this.state)
    }else{
      let missedFil = () => {
        let arr = []
if(this.state.languages.length === 0){
  arr.unshift("мова")
}
if(!this.state.email){
  arr.unshift("ел-пошта")
}
if(!this.state.login){
arr.unshift("логін")
}
        return arr.join(",");
      }
      alert(`Будь ласка, введіть усі поля(${missedFil()})`)
    }
  };
  handleChange = (event) => {
    const { name, value, type } = event.target;
    this.setState({ [name]: type === "checkbox" ?  (this.state.languages.join("")+` ${value}`).split(" ") : value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="nickname"
          value={this.state.login}
          type="text"
          name="login"
          onChange={this.handleChange}
        />
        <input
          placeholder="example@gmail.com"
          value={this.state.email}
          type="text"
          name="email"
          onChange={this.handleChange}
        />

        <label>
          <input
            type="checkbox"
            name="languages"
            value="uk"
            onChange={this.handleChange}
          />
          Українська
        </label>
        <label>
          <input
            type="checkbox"
            name="languages"
            value="en"
            onChange={this.handleChange}
          />
          English
        </label>
        <label>
          <input
            type="checkbox"
            name="languages"
            value="de"
            onChange={this.handleChange}
          />
          Deutsch
        </label>
        <label>
          <input
            type="checkbox"
            name="languages"
            value="fr"
            onChange={this.handleChange}
          />
          Français
        </label>

        <button>
          Login
        </button>
      </form>
    );
  }
}
