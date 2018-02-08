import React from 'react';

import RefreshIndicator from 'material-ui/RefreshIndicator'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import CompareArrows from 'material-ui/svg-icons/action/compare-arrows'
import TextField from 'material-ui/TextField'

const style = {
  alignTextField: {
    textAlign: 'center',
    marginBottom: 30
  },
  alignBtn: {
    textAlign: 'center',
    position: 'relative',
    top: '30px'
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  }
}

const SearchInput = ({ nameOne, nameTwo, labelOne, labelTwo, input, handleChange, handleSearch, searching }) => {
  
  const refreshIndicator = (
    <RefreshIndicator
      size={40}
      left={10}
      top={0}
      status="loading"
      style={style.refresh}
    />
  )

  const compareButton = (
    <FloatingActionButton
      mini
      secondary
      disabled={searching || (input.cityOne === '' || input.cityTwo === '')}
      onTouchTap={handleSearch}
    >
      <CompareArrows />
    </FloatingActionButton>
  )

  return (
    <div>
      <div className="col m5" style={style.alignTextField}>
        <TextField
          floatingLabelText={labelOne}
          name={nameOne}
          value={input.cityOne}
          onChange={handleChange}
        />
      </div>
      <div className="col m2" style={style.alignBtn}>
        {searching ? refreshIndicator : compareButton}
      </div>
      <div className="col m5" style={style.alignTextField}>
        <TextField
          floatingLabelText={labelTwo}
          name={nameTwo}
          value={input.cityTwo}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default SearchInput