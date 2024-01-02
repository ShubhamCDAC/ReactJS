<<<<<<< HEAD

import styled from "styled-components";

const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }

    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
                {arrNumber.map((value, i) => (
                    <Box
                        isSelected={value === selectedNumber} //props
                        key={i}
                        onClick={() => numberSelectHandler(value)}
                    >
                        {value}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
            
        </NumberSelectorContainer>
    );
};

export default NumberSelector;


const NumberSelectorContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 10px;
        cursor: pointer;

    .error{
        color: #bd1212;
        font-weight: normal;
    }
    .flex{
        display: flex;
        gap: 24px;
    }

    p{
        font-size: 24px;
        font-weight: 700;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid #000;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    background-color: ${(props) => props.isSelected ? "#000" : "#fff"};
    color: ${(props) => props.isSelected ? "#fff" : "#000"};
    transition: 0.4s ease;
`
=======

import styled from "styled-components";

const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }

    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
                {arrNumber.map((value, i) => (
                    <Box
                        isSelected={value === selectedNumber} //props
                        key={i}
                        onClick={() => numberSelectHandler(value)}
                    >
                        {value}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
            
        </NumberSelectorContainer>
    );
};

export default NumberSelector;


const NumberSelectorContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 10px;
        cursor: pointer;

    .error{
        color: #bd1212;
        font-weight: normal;
    }
    .flex{
        display: flex;
        gap: 24px;
    }

    p{
        font-size: 24px;
        font-weight: 700;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid #000;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    background-color: ${(props) => props.isSelected ? "#000" : "#fff"};
    color: ${(props) => props.isSelected ? "#fff" : "#000"};
    transition: 0.4s ease;
`
>>>>>>> 869c2fb (test)
