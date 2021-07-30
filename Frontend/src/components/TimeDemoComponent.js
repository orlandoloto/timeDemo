import React, { Component } from 'react'
import TimeDemoService from '../services/TimeDemoService'
import './timedemo.css';


export default class TimeDemo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            timeDemos: [],
            timeDemo: "",
            zonetime: "",
            options: [{ id: 1, name: 'UTC +1' }, { id: 2, name: 'UTC +0' }, { id: 3, name: 'UTC -1' }]
        }

        this.changeTimeHandler = this.changeTimeHandler.bind(this)
        this.changezoneTimeHandler = this.changezoneTimeHandler.bind(this);
        this.saveTimeZone = this.saveTimeZone.bind(this);
    }


    componentDidMount() {
        this.getTimeDemos();
    }

    getTimeDemos = () => {
        TimeDemoService.getTimeDemos().then((res) => {
            this.setState({ timeDemos: res.data })
        })
    }

    changeTimeHandler = (e) => {
        this.setState({ timeDemo: e.target.value });
    }

    changezoneTimeHandler = (e) => {
        this.setState({ zonetime: e.target.value });
    }

    saveTimeZone = (e) => {
        
        let demo = { timeDemo: this.state.timeDemo, zoneTime: this.state.zonetime }
        console.log('timedemo => ' + JSON.stringify(demo))

        TimeDemoService.createTimeDemo(demo);
        this.cancelCourse();
        this.getTimeDemos();
    }

    cancelCourse = () => { 
        document.getElementById("form-time-demo").reset();
    }

    render() {
        return (
            <div>
                <div className="prueba">
                    <div className="row">
                        <div className="card">
                            <h5 className="card-header text-center">Time Demo</h5>
                            <div className="card-body">
                                <form id="form-time-demo">
                                    <div className="form-group">
                                        <label className="ss">Hora</label>
                                        <div className="input-group">
                                            <input type="time" className="form-control" id="inpu-time-demo"
                                                value={this.state.timeDemo} onChange={this.changeTimeHandler} />
                                            <div className="input-group-addon"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <label>Zona horaria</label>
                                        <select className="custom-select mr-sm-2" id="zoneTimeid" onChange={this.changezoneTimeHandler}>
                                            {
                                                this.state.options.map(opt =>
                                                    <option key={opt.id} value={opt.name}  > {opt.name} </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <br />
                                    <button type="button" className="btn btn-primary" onClick={this.saveTimeZone}>Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="card bg-light">
                            <div className="card-body">
                                {
                                    this.state.timeDemos.map(
                                        timeDemos =>
                                            <h6 key={timeDemos.id}>{timeDemos.timeDemo} - {timeDemos.zoneTime}</h6>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
