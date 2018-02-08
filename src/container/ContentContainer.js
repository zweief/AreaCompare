import React, {Component} from 'react'

import { Card } from 'material-ui/Card'

import SearchInput from '../components/SearchInput'
import Chart from '../components/Chart'

class ContentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: {
        cityOne: '',
        cityTwo: '',
      },
      data: {
        cityOne: null,
        cityTwo: null
      },
      searching: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  async getCityData(city, cityNumber) {
    this.setState({searching: true})
    let url = `https://api.teleport.org/api/cities/?search=${city}&embed=city:search-results/city:item/city:urban_area/ua:scores` 
    try {
      let data = this.state.data
      let cityIdentifyer = cityNumber
      let res = await fetch(url)
      data[cityIdentifyer] = await res.json()
      return this.setState({
        data: data, 
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange(e) {
    const field = e.target.name;
    let input = this.state.input;
    input[field] = e.target.value;
    return this.setState({input: input});
  }

  handleSearch() {
    let cityOne = this.state.input.cityOne
    let cityTwo = this.state.input.cityTwo
    this.getCityData(cityOne, 'cityOne')
    this.getCityData(cityTwo, 'cityTwo')
    this.setState({
      input: {
        cityOne: '',
        cityTwo: ''
      },
      searching: false
    })
  }

  render() {
    const {searching, input, data} = this.state
    return (
      <div className='container'>
        <Card>
          <div className='row'>
            <SearchInput 
              nameOne='cityOne'
              labelOne='City One'
              nameTwo='cityTwo' 
              labelTwo='City Two'
              input={input}
              searching={searching}
              handleChange={this.handleChange}
              handleSearch={this.handleSearch}
            />
          </div>
          {(data.cityOne !== null && data.cityTwo !== null)  && (
            <div>
              <Chart 
                dataCityOne={data.cityOne}
                dataCityTwo={data.cityTwo}
              />
            </div>
          )}
        </Card >
      </div>
      
    )
  }
}

export default ContentContainer