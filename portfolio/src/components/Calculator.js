import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';

function Calculator(){
  const[inputValues, setInputValues] = useState("")
  const[result, setResult] =useState("")

  const handleButtonClick = (value) => {
    setInputValues((prevInput) => result ? value :prevInput + value );
  };

  const handleOperattion = (operation) => {
    setInputValues ((prevInput) => result ? result + operation: prevInput + operation);
    setResult("");
  };

  const handleCalculate =() =>{
    try {
      const calculatedResult=(calculateExpression(inputValues).toString());
      setResult(calculatedResult);;
      setInputValues(calculatedResult);
    } catch (error) {
      setResult("Error");

      }
    }
const handleBackspace = () => {
  setInputValues((prevInput) => prevInput.slice(0, -1));
  setResult("");
};
const calculateExpression = (expression) => {
const operands = expression.split(/[+\-*/%]/);
const operators = expression.split(/[0-9.]+/).filter(Boolean);
let result = parseFloat(operands[0]);

for(let i=1; i< operands.length;i++) {
  const operand = parseFloat(operands[i]);
  const operator = operators[i - 1];
  switch (operator) {
    case '+':
      result +=operand;
      break;
      case '-':
        result -=operand;
        break;
        case '*':
          result *=operand;
          break;
          case '/':
            result /=operand;
            break;
            default:
            break;
  }
}
return result;
};
const handleClear = () => {
  setInputValues("");
  setResult('');
};

return (
  <div className="color1">
  <div className='App1'>
    <h1 className="cal1"><u>𝘾𝙖𝙡𝙘𝙪𝙡𝙖𝙩𝙤𝙧</u></h1>

    <div className='container1'>
      <form>
        <input type='text' value={result|| inputValues} className='display1' />
      </form>
      <div className='keypad1'>
        <button onClick={handleClear} id='clear' className='highlight'>
          AC
        </button>
        <button onClick={handleBackspace} className='highlight1'>
          DEL
        </button>
        <button name='/' className='highlight1' onClick={()=>handleOperattion('/')}>
          /
        </button>
        <button name='7' onClick={()=>handleButtonClick('7')}>
          7
        </button>
        <button name='8' onClick={()=>handleButtonClick('8')}>
          8
        </button>
        <button name='9' onClick={()=>handleButtonClick('9')}>
          9
        </button>
        <button name='*' className='highlight1' onClick={()=>handleOperattion('*')}>
          *
        </button>
        <button name='4' onClick={()=>handleButtonClick('4')}>
          4
        </button>
        <button name='5' onClick={()=>handleButtonClick('5')}>
          5
        </button>
        <button name='6' onClick={()=>handleButtonClick('6')}>
          6
        </button>
        <button name='-' className='highlight1' onClick={()=>handleOperattion('-')}>
          -
        </button>
        <button name='1' onClick={()=>handleButtonClick('1')}>
          1
        </button>
        <button name='2' onClick={()=>handleButtonClick('2')}>
          2
        </button>
        <button name='3' onClick={()=>handleButtonClick('3')}>
          3
        </button>
        <button name='+' className='highlight1' onClick={()=>handleOperattion('+')}>
          +
        </button>
        <button name='0' onClick={()=>handleButtonClick('0')}>
          0
        </button>
        <button name='.' onClick={()=>handleButtonClick('.')}>
          .
        </button>
        <button onClick={handleCalculate} id='equal' className='highlight1'>
          =
        </button>
      </div>
    </div>
  </div>
  </div>
);
}

export default Calculator;