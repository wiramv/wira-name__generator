import {Component} from 'react'
class ShowNama extends Component {
    state = { 
     } 
    render() { 
        return (
            <div className="baby-names">
                {this.props.names.map((x, index) =>(
                    <span key={index+1}>
                        "{x.name.first}<span className='spasi'> &nbsp;</span><b>{x.name.last}</b>"
                    </span>
                ))}
                <br /><br />
                <button onClick={this.props.dataReset}>reset</button>
                <button onClick={this.props.getNames}>Another Name</button>
            </div>
        );
    }
}
 
export default ShowNama;