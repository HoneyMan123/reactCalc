import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles/Calculate.css';

const Calculate = () => {
    const [figure, setFigure] = useState('triangle');
    const [side1 , setSide1 ] = useState('')
    const [side2 , setSide2 ] = useState('')
    const [height , setHeight ] = useState('')
    const [base, setBase] = useState('')
    const submit = (event) =>{
        event.preventDefault()
        const figureData = inputs[figure].values;
        const result = inputs[figure].formula(figureData);
        alert(result);
    }

  
    const inputs = {
        triangle: {
            renderElements: (
                <form onSubmit={submit} >
                    <input onChange={ (e) =>setSide1(e.target.value)} value={side1} id='side1' placeholder='side 1' />
                    <input onChange={ (e) =>setSide2(e.target.value)} value={side2} id='side2' placeholder='side 2' />
                    <input onChange={ (e) =>setHeight(e.target.value)} value={height} id='height' placeholder='height' />
                    <input onChange={ (e) =>setBase(e.target.value)} value={base} id='base' placeholder='base' />
                    <input on type="submit" value='submit' />
                </form>
            ),
            values:{  
                side1: side1,
                side2: side2,
                base: base,
                height: height, 
            },
            formula: ({ height, base }) => (height * base) / 2

        },
        square: {
            renderElements: (
                <form onSubmit={submit}>
                    <input placeholder='side'></input>
                    <input type='submit'></input>

                </form>
            ),
            values: {
                side1: side1, 
                
            },
            formula: ( {side1} )=> (side1 * side1 ) 
        },
    };

    const renderInput = (event) => {
        const value = event.target.value;
        setFigure(value);
    };

 
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <select
                id='selectFigure'
                value={figure}
                onChange={renderInput}
                style={{ width: '200px', height: '30px' }}
            >
                <option value="square">Square</option>
                <option value="triangle">Triangle</option>
            </select>

            <div id='calculatorContainer'>
                {inputs[figure].renderElements}
            </div>
        </div>
    );
}

export default Calculate;
