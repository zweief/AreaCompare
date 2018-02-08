import React from 'react'

import ActionGrade from 'material-ui/svg-icons/action/grade'
import Subheader from 'material-ui/Subheader'

import { Bar } from 'react-chartjs-2'

const Chart = ({ dataCityOne, dataCityTwo }) => {

  const scoresOne = dataCityOne
    ._embedded['city:search-results'][0]
    ._embedded['city:item']
    ._embedded['city:urban_area']
    ._embedded['ua:scores']
    .categories
  
  const scoresTwo = dataCityTwo
    ._embedded['city:search-results'][0]
    ._embedded['city:item']
    ._embedded['city:urban_area']
    ._embedded['ua:scores']
    .categories

  const totalScoreOne = dataCityOne
    ._embedded['city:search-results'][0]
    ._embedded['city:item']
    ._embedded['city:urban_area']
    ._embedded['ua:scores']
    .teleport_city_score
  
  const totalScoreTwo = dataCityTwo
    ._embedded['city:search-results'][0]
    ._embedded['city:item']
    ._embedded['city:urban_area']
    ._embedded['ua:scores']
    .teleport_city_score

  const cityNameOne = dataCityOne
    ._embedded['city:search-results'][0]
    ._embedded['city:item']
    .name
  
  const cityNameTwo = dataCityTwo
    ._embedded['city:search-results'][0]
    ._embedded['city:item']
    .name

  const labelOne = dataCityOne
    ._embedded['city:search-results'][0]
    .matching_full_name
  
  const labelTwo = dataCityTwo
    ._embedded['city:search-results'][0]
    .matching_full_name

  const dataScoresOne = scoresOne.map(val => val.score_out_of_10)
  const dataScoresTwo = scoresTwo.map(val => val.score_out_of_10)

  const dataLabels = scoresOne.map(val => val.name)
  const data = [{
    data: dataScoresOne,
    label: labelOne,
    backgroundColor: "#ffcc80",
    borderColor: '#ffa726',
    hoverBackgroundColor: '#ffb74d',
    hoverBorderColor: '#ff9800'
  },
  {
    data: dataScoresTwo,
    label: labelTwo,
    backgroundColor: "#80deea",
    borderColor: "#26c6da",
    hoverBackgroundColor: "#4dd0e1",
    hoverBorderColor: "#00bcd4"
  }]

  return (
    <div style={{textAlign: 'center'}}>
      <div className="row">
        <div className="col s6" style={{textAlign: 'center'}}>
          <Subheader 
            style={{padding: 0}}>
            {cityNameOne}
          </Subheader>
          <h1 style={{margin: 0}}>
            <ActionGrade/>
            {Math.round(totalScoreOne * 100) /100}
          </h1>
        </div>
        <div className="col s6" style={{textAlign: 'center'}}>
          <Subheader
            style={{padding: 0}}>
            {cityNameTwo}
          </Subheader>
          <h1 style={{margin: 0}}>
            <ActionGrade/>
            {Math.round(totalScoreTwo * 100) /100}
          </h1>
        </div>
      </div>
      <div className="s12">
        <Bar
          height={115}
          data={{
            labels: dataLabels,
            datasets: data
          }}
          options={{
            tooltips: {
              mode: 'index'
            },
            title: {
              display: true,
              text: 'Quality of Life Comparison'
            },
            scales: {
              xAxes: [{
                ticks: {
                  autoSkip: false
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }}
        />
      </div>
    </div>
  )
}

export default Chart