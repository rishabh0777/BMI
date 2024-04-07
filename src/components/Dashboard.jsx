import React, {useState} from 'react'
import Input from './Input'
import Button from './Button'

const Dashboard = () => {
    const [Weight, SetWeight]= useState('')
    const [Height, setHeight]= useState('')
    const [bmi, setBmi] = useState('')
    const [health, setHealth] = useState('')
    const getWeight =(e)=>{
        const txt = e.target.value
        SetWeight(txt)
        console.log(txt)
    }

    const getHeight =(e)=>{
        const txt = setHeight(e.target.value)
        console.log(txt)
    }
    let status;
    const handleSubmit = (e)=>{
        e.preventDefault();
        const heightInMeter = Height * 0.3048;
        const BMI = Weight/ (heightInMeter * heightInMeter)
        const BMIval = BMI.toFixed(2)
        setBmi(`Your BMI is  ${BMIval}`)
        
        if (BMIval < 18.5) {
            setHealth('Underweight');

        } else if (BMIval < 25) {
            setHealth('Normal Weight')

        } else if (BMIval < 30) {
            setHealth('Overweight')

        } else {
            setHealth('Obese')

        }
    
        
    }
    const reset = (e)=>{
        e.preventDefault()
        setHealth('')
        setBmi('')
    }


  return (
    <div className='md:w-[25vw] h-[65vh] bg-zinc-100 flex flex-col items-center rounded-xl shadow-black shadow-xl p-5 sm:w-[40vw]'>
        <Input placeholder='Enter Your Weight' value={Weight} getText={getWeight}/>
        <Input placeholder='Enter Your Height'value={Height} getText={getHeight}/>
        <Button className='mt-12' fun={handleSubmit} text='Get BMI' />
        <Button className='mt-3' text='Reset' fun={reset} />
        <h3 className='mt-6 text-2xl'>{bmi}</h3>
        <p>{health}</p>
    </div>
  )
}

export default Dashboard