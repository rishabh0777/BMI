
const Input = ({placeholder,value,getText}) => {
  return (
    <>
    <input 
    type="text" 
    className='px-2 py-2 rounded-md outline-none mt-8 w-[78%] border border-zinc-700 shadow-lg shadow-black' 
    typeof='number'
    placeholder={placeholder}
    value={value}
    onChange={getText}
    />
    </>
  )
}

export default Input