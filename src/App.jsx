import React from "react";
import "./App.css"
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

class App extends React.Component {
  state = {
    open: false,
    nama1: 'Reiner',
    nama2: 'Braun'
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  submit = (e) => {
    console.log(e.target.value)
    this.setState({nama1: e.target.value})
  }

  submit2 = (e) => {
  console.log(e.target.value)
  this.setState({nama2: e.target.value})
  }
  onSave =() => {
    this.setState ({
      nama1: this.state.nama1,
      nama2: this.state.nama2,
    })
    this.onCloseModal()
  }

  render() {
    const { open } = this.state;
    return (
      <div className="umum">
        <h2 className="nmsy">Nama Saya <br/>{this.state.nama1} {this.state.nama2}</h2>
        <button onClick={this.onOpenModal} className="button1"><span>Ganti Nama </span></button>
        <Modal open={open} onClose={this.onCloseModal} className="modal">
          <div className="kepala">
            <h2>Masukkan Nama Anda di Sini:</h2>
          </div>
          <div>
            <input className="input" onChange={this.submit} placeholder="Nama Depan" /><p/>
            <input className="input" onChange={this.submit2} placeholder="Nama Belakang" /><p/>
          </div>
          <div>
            <button onClick={this.onSave} className="button2">Woghey</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
