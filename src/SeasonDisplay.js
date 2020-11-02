import React from "react";

const seasonConfig = {
  summer: {
    text: 'Il y a du soleil',
    iconName: 'sun'
  },
  winter: {
    text: 'Il fait froid',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if(month > 2  && month < 9) return lat > 0 ? 'summer' : 'winter';
  else return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];
  console.log("AAA", iconName)
  return <div>
    <i className={`massive ${iconName} icon`}></i>
    <h1>{text}</h1>
    <i className={`massive ${iconName} icon`}></i>
    </div>;
};

export default SeasonDisplay;
