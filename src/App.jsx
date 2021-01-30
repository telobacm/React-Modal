import React from "react";
import "./App.css"
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

class App extends React.Component {
  state = {
    open: false,
    nama1: 'Reiner',
    nama2: 'Braun',
    value1: '',
    value2: '',
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  gantinama = (e) => {
    console.log(e.target.value)
    this.setState({value1: e.target.value})
  }

  gantinama2 = (e) => {
  console.log(e.target.value)
  this.setState({value2: e.target.value})
  }

  onSave =() => {
    this.setState ({
      nama1: this.state.value1,
      nama2: this.state.value2,
    })
    this.onCloseModal()
  }

  render() {
    return (
      <div className="umum">
        <h2 className="nmsy">Nama Saya <br/>{this.state.nama1} {this.state.nama2}</h2>
        <button onClick={this.onOpenModal} className="button1"><span>Ganti Nama </span></button>
        <IkiModal open={this.state.open} nama1={this.state.nama1} nama2={this.state.nama2} onOpenModal={this.onOpenModal}
          onCloseModal={this.onCloseModal} gantinama={this.gantinama} gantinama2={this.gantinama2} onSave={this.onSave} />
      </div>
    );
  }
}

export default App;

export class IkiModal extends React.Component {
  render() {
    const { open } = this.props;
    return (
    <Modal open={open} onClose={this.props.onCloseModal} className="modal">
      <div className="kepala">
        <h2>Masukkan Nama Anda di Sini:</h2>
      </div>
      <form>
        <input className="input" onChange={this.props.gantinama} placeholder="First Name" defaultValue={this.props.nama1} /><p/>
        <input className="input" onChange={this.props.gantinama2} placeholder="Last Name" defaultValue={this.props.nama2} /><p/>
      </form>
      <div>
        <button onClick={this.props.onSave} className="button2">Woghey</button>
        <button onClick={this.props.onCloseModal} className="button3">Nggak Jadi</button>
      </div>
    </Modal>
    )
  }
}
