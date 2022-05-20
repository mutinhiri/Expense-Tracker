import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
  const datapointValues = props.dataPoints.map(dataPoint => dataPoint.value );
  const totalMaximum = Math.max();
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) =>
       <ChartBar
         key={dataPoint.id}
         value={dataPoint.value}
         maxValue={null}
         label={dataPoint.label} />)}
    </div>
  )
}

export default Chart