import React, { Component } from "react";

class App extends Component {
  state = {
    list: []
  };

  agregar = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    const id = Math.random().toString(16);
    const tarea = { text, id };
    this.setState(state => ({
      list: [...state.list, tarea]
    }));
    e.target[0].value = ""; // Limpiar el input después de agregar
  };

  render() {
    return (
      <div className="App">
        <h1>shouldComponentUpdate</h1>
        <form onSubmit={this.agregar}>
          <input type="text" placeholder="Ingresa tu Tarea" />
          <button type="submit">Añadir</button>
        </form>
        
        {/* Lista de tareas */}
        {this.state.list.map((item) => (
          <div key={item.id}>
            {item.text}
          </div>
        ))}
      </div>
    );
  }
}

export default App;