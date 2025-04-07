import React, { Component } from "react";

const itemStyle = {
  padding: "1em",
  borderBottom: "1px solid #ccc",
  marginTop: "0.4em",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const buttonStyle = {
  background: "#ff4444",
  color: "white",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  width: "24px",
  height: "24px",
};

const appStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "2em",
  fontFamily: "Arial, sans-serif",
};

class Item extends Component {
  handleClick = () => {
    this.props.onDelete(this.props.item.id);
  };

  render() {
    return (
      <div style={itemStyle}>
        {this.props.item.text}
        <button style={buttonStyle} onClick={this.handleClick}>
          x
        </button>
      </div>
    );
  }
}

class App extends Component {
  state = {
    list: [],
  };

  agregar = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    const id = Math.random().toString(16);
    const tarea = { text, id };
    this.setState((state) => ({
      list: [...state.list, tarea],
    }));
    e.target[0].value = "";
  };

  eliminarTarea = (id) => {
    this.setState((state) => ({
      list: state.list.filter((item) => item.id !== id),
    }));
  };

  render() {
    return (
      <div style={appStyle}>
        <h1>shouldComponentUpdate</h1>
        <form onSubmit={this.agregar}>
          <input type="text" placeholder="Ingresa tu Tarea" />
          <button type="submit">Añadir</button>
        </form>

        {/* Lista de tareas */}
        {this.state.list.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={this.eliminarTarea}  // Pasamos la función de eliminación
          />
        ))}
      </div>
    );
  }
}

export default App;