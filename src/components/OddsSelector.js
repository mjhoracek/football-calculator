import React, { useState } from 'react'

const spreadTable = [
    [0, 50],
    [0.5, 50],
    [1, 51.3],
    [1.5, 52.5],
    [2, 53.5],
    [2.5, 54.5],
    [3, 59.4],
    [3.5, 64.3],
    [4, 65.8],
    [4.5, 67.3],
    [5, 68.1],
    [5.5, 69],
    [6, 70.7],
    [6.5, 72.4],
    [7, 75.2],
    [7.5, 78.1],
    [8, 79.1],
    [8.5, 80.2],
    [9, 80.7],
    [9.5, 81.1],
    [10, 83.6],
    [10.5, 86],
    [11, 87.1],
    [11.5, 88.2],
    [12, 88.5],
    [12.5, 88.7],
    [13, 88.9],
    [13.5, 90],
    [14, 92.4],
    [14.5, 94.9],
    [15, 95.6],
    [15.5, 96.3],
    [16, 98.1],
    [16.5, 99.8],
    [17, 100]
]


const OddsSelector = ( {index, game, handleOdds }) => {
const [inputType, setInputType] = useState("percentage")

const lookupSpread = (userInput) => {
    const spreadPercentage = spreadTable.filter(array => array[0] === userInput)
    const arr = (spreadPercentage.flat())
    return arr[1];
}

if(inputType === 'percentage'){
    return (
        <div>
                <label for="percentage">Percentage</label>
                <input 
                    type="radio"
                    id="percentage"
                    name={game.home}
                    value={(inputType === 'percentage') ? true : false}
                    onChange={ () => setInputType("percentage")}
                />

                <label for="spread">Spread</label>
                <input 
                    type="radio"
                    id="spread"
                    name={game.home}
                    value={(inputType === 'spread') ? true : false}
                    onChange={ () => setInputType('spread')}
                />

                <br/>

                <label style={{marginBottom: "3px"}} for="odds">Enter Win Probability</label>
                <input 
                    type="number" 
                    name="probablity"
                    value={game.odds}
                    id="odds" 
                    min="0" 
                    max="100"
                    style={{width: "40%"}}
                    onChange={e => {
                        handleOdds(index, e.target.value);
                        }
                    }
                />
        </div>
    )
}

if(inputType === 'spread'){
    return (
        <div>
                <label for="percentage">Percentage</label>
                <input 
                    type="radio"
                    id="percentage"
                    name={game.home}
                    value={(inputType === 'percentage') ? true : false}
                    onChange={() => setInputType("percentage")}
                />

                <label for="spread">Spread</label>
                <input 
                    type="radio"
                    id="spread"
                    name={game.home}
                    value={(inputType === 'spread') ? true : false}
                    onChange={ () => setInputType('spread')}
                />
                
                <br/>
                
                <label style={{marginBottom: "3px"}} for="odds">Enter Win Probability</label>
                <select
                    name="probablity"
                    id="odds" 
                    style={{width: "40%"}}
                    onChange={e => {
                        console.log(e.target.value)
                        let input = Number(e.target.value)
                        handleOdds(index, lookupSpread(input));
                        }
                    }
                >
                    <option value="">--Select Spread--</option>
                    <option value={Number(0.5)}>-0.5</option>
                    <option value={Number(1)}>-1</option>
                    <option value={Number(1.5)}>-1.5</option>
                    <option value={Number(2)}>-2</option>
                    <option value={Number(2.5)}>-2.5</option>
                    <option value={Number(3)}>-3</option>
                    <option value={Number(3.5)}>-3.5</option>
                    <option value={Number(4)}>-4</option>
                    <option value={Number(4.5)}>-4.5</option>
                    <option value={Number(5)}>-5</option>
                    <option value={Number(5.5)}>-5.5</option>
                    <option value={Number(6)}>-6</option>
                    <option value={Number(6.5)}>-6.5</option>
                    <option value={Number(7)}>-7</option>
                    <option value={Number(7.5)}>-7.5</option>
                    <option value={Number(8)}>-8</option>
                    <option value={Number(8.5)}>-8.5</option>
                    <option value={Number(9)}>-9</option>
                    <option value={Number(9.5)}>-9.5</option>
                    <option value={Number(10)}>-10</option>
                    <option value={Number(10.5)}>-10.5</option>
                    <option value={Number(11)}>-11</option>
                    <option value={Number(11.5)}>-11.5</option>
                    <option value={Number(12)}>-12</option>
                    <option value={Number(12.5)}>-12.5</option>
                    <option value={Number(13)}>-13</option>
                    <option value={Number(13.5)}>-13.5</option>
                    <option value={Number(14)}>-14</option>
                    <option value={Number(14.5)}>-14.5</option>
                    <option value={Number(15)}>-15</option>
                    <option value={Number(15.5)}>-15.5</option>
                    <option value={Number(16)}>-16</option>
                </select>
        </div>
    )
}
}

export default OddsSelector
