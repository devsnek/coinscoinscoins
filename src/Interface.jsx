import { h, Component } from 'preact';
import miner from './coins.mjs';

const InterfaceStyle = {
  border: '1px solid 45%',
  'background-color': 'grey',
  height: '200px',
  width: '200px',
  'font-family': 'monospace',
  color: '#fff',
  'text-align': 'center',
  position: 'absolute',
  bottom: 0,
  right: 0,
};

const ButtonStyle = {
  border: 'none',
  'border-radius': '0px',
  'text-align': 'center',
  'text-decoration': 'none',
  display: 'inline-block',
  'font-size': '16px',
  outline: 'none',
};

export default class Interface extends Component {
  componentDidMount() {
    this.setState({ running: true });
    setInterval(() => this.setState({
      hps: miner.getHashesPerSecond().toFixed(3),
      as: miner.getAcceptedHashes(true),
      nt: miner.getNumThreads(),
    }), 500);
  }

  render() {
    return (
      <div style={InterfaceStyle}>
        <h3 style={{ 'padding-top': '5px' }}>Coins Coins Coins</h3>
        <h2>{this.state.hps || 0} Hashes/s</h2>
        <h2>{this.state.as || 0} Total</h2>
        <h2>
          {this.state.nt || 0} Threads
          <button style={ButtonStyle} onclick={() => miner.setNumThreads(this.state.nt - 1)}>-</button>
          <button style={ButtonStyle} onclick={() => miner.setNumThreads(this.state.nt + 1)}>+</button>
          <br />
          <button style={ButtonStyle} onclick={this.stop.bind(this)}>{this.state.running ? 'STOP' : 'START'}</button>
        </h2>
      </div>
    );
  }

  stop() {
    if (this.state.running) {
      miner.stop();
      this.setState({ running: false });
    } else {
      miner.start();
      this.setState({ running: true });
    }
  }
}
