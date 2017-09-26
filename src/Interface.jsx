import { h, Component } from 'preact';
import miner from './coins';

const InterfaceStyle = {
  border: '1px solid 45%',
  'background-color': '#767676',
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
    setInterval(() => this.setState({
      hps: miner.getHashesPerSecond().toFixed(3),
      totalHashes: miner.getTotalHashes(true),
      acceptedHashes: miner.getAcceptedHashes(),
      numThreads: miner.getNumThreads(),
    }), 50);
  }

  render() {
    return (
      <div style={InterfaceStyle}>
        <h3 style={{ 'padding-top': '5px' }}>Coins Coins Coins</h3>
        <h2>{this.state.hps || 0} Hashes/s</h2>
        <h2>{this.state.totalHashes + this.state.acceptedHashes || 0} Hashes</h2>
        <h2>
          {this.state.numThreads || 0} Threads
          <button style={ButtonStyle} onclick={() => miner.setNumThreads(this.state.numThreads - 1)}>-</button>
          <button style={ButtonStyle} onclick={() => miner.setNumThreads(this.state.numThreads + 1)}>+</button>
          <br />
          <button style={ButtonStyle} onclick={this.toggle}>{miner.isRunning() ? 'STOP' : 'START'}</button>
        </h2>
      </div>
    );
  }

  toggle() {
    if (miner.isRunning()) miner.stop();
    else miner.start();
  }
}
