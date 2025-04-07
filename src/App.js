import React, { Component } from "react";

// Estilos con paleta azul oscura y pantalla completa
const styles = {
  app: {
    width: "100vw",
    height: "100vh",
    padding: "2em",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    color: "#f8fafc",
    overflow: "auto",
    boxSizing: "border-box"
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  header: {
    color: "#60a5fa",
    textAlign: "center",
    marginBottom: "2em",
    fontSize: "2.5em",
    fontWeight: "600",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)"
  },
  form: {
    display: "flex",
    marginBottom: "2em",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
  },
  input: {
    flex: "1",
    padding: "16px 24px",
    border: "none",
    fontSize: "16px",
    background: "#1e293b",
    color: "#f8fafc",
    outline: "none",
    "&::placeholder": {
      color: "#94a3b8",
      opacity: "0.8"
    },
    "&:focus": {
      boxShadow: "inset 0 0 0 2px #3b82f6"
    }
  },
  addButton: {
    padding: "0 32px",
    background: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "all 0.2s ease",
    "&:hover": {
      background: "#1d4ed8"
    }
  },
  itemContainer: {
    flex: "1",
    background: "#1e293b",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  },
  itemList: {
    flex: "1",
    overflowY: "auto"
  },
  item: {
    padding: "1.2em 1.5em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #334155",
    transition: "background 0.2s ease",
    "&:hover": {
      background: "#334155"
    }
  },
  itemText: {
    fontSize: "16px",
    color: "#e2e8f0",
    flex: "1",
    marginRight: "16px"
  },
  deleteButton: {
    background: "#8B0000",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      background: "#2563eb",
      transform: "translateY(-1px)"
    }
  },
  emptyState: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "#94a3b8",
    fontSize: "18px",
    padding: "2em",
    textAlign: "center"
  }
};

class Item extends Component {
  handleClick = () => {
    this.props.onDelete(this.props.item.id);
  };

  render() {
    return (
      <div style={styles.item}>
        <span style={styles.itemText}>{this.props.item.text}</span>
        <button style={styles.deleteButton} onClick={this.handleClick}>
          Eliminar
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
    const text = e.target[0].value.trim();
    if (!text) return;
    
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
      <div style={styles.app}>
        <div style={styles.container}>
          <h1 style={styles.header}>Gestor de Tareas</h1>
          <form onSubmit={this.agregar} style={styles.form}>
            <input 
              type="text" 
              placeholder="Escribe una nueva tarea..." 
              style={styles.input}
            />
            <button type="submit" style={styles.addButton}>
              Agregar
            </button>
          </form>

          <div style={styles.itemContainer}>
            {this.state.list.length > 0 ? (
              <div style={styles.itemList}>
                {this.state.list.map((item) => (
                  <Item
                    key={item.id}
                    item={item}
                    onDelete={this.eliminarTarea}
                  />
                ))}
              </div>
            ) : (
              <div style={styles.emptyState}>
                No hay tareas pendientes. ¡Agrega tu primera tarea!
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;