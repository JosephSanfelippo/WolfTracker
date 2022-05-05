import React from 'react';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      mod: "",
      map: "",
      playersOn: "",
      players: [],
    }

  }


  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    const uri = 'https://et.splatterladder.com/api/squery.php?format=json&svid[]=755659&svadd[]=68.232.172.16:27960';
    axios.get(uri)
    .then(data => {
      let path = data.data.server['755659'];
      console.log(path);
      this.setState({
        name: path.rawname,
        address: path.adress,
        mod: path.modname,
        map: path.mapname,
        playersOn: path.playernum + '/' + path.maxslots,
        players: path.player
      })
    })
    .catch(err => {
      console.log('error!', err)
    })
  }



  render() {
    return(
      <div className="overview">
        <h2>Server Name: {this.state.name}</h2>
        <h3>IP: {this.state.address}</h3>
        <h3>Mod: {this.state.mod}</h3>
        <h3>Map: {this.state.map}</h3>
        <h3>Players On: {this.state.playersOn}</h3>
        <h3>Players:</h3>
        <div>
            {/* <li className="playerName"><b>name: {this.state.players['1'].name}</b></li> */}
            {/* <li className="score"><b>score: {this.state.players}</b></li>
            <li className="team" ><b>team: {this.state.players}</b></li> */}
        </div>
          ))}
      </div>
    )
  }

}


export default Overview;