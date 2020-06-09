import React from 'react'
import {Line} from 'react-chartjs-2'
import { data1 } from './randomData'

class Chart1 extends React.Component {
    constructor(props) {
        super(props)
        this.chartRef = React.createRef()
        this.data = {labels:['January', 'February', 'March', 'April', 'May', 'June'], 
        datasets: [
            {
              label: 'Random Data',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: data1
            }
          ]
        } 
    }

    componentDidMount() {
        console.log(this.chartRef)
    }

    render() {
        return (
            <Line ref={this.chartRef} data={this.data} />
        )
    }
}

export default Chart1