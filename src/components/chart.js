import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
return _.round(_.sum(data)/data.length);
console.log("data is" + data);    
}

export default ({data , color, units}) => {
    
    return (
            <div>
                <Sparklines svgHeight={120} svgWidth={180} data={data} >
                <SparklinesReferenceLine type="avg" />
                <SparklinesLine color={color} style={{ stroke: "white", fill: color }} />
                </Sparklines >
            
            <div> {average(data)} {units} </div>
            
            </div>
        );
}