const Button = ({backgroundColor, setColor, btnTextColor="white"}) => {
    return (
            <button onClick={() => setColor(backgroundColor)} className='outline-none px-4 py-1 rounded-full text-white shadow-lg custom-capitalization' 
            style={{background:backgroundColor, "color": btnTextColor}}>{backgroundColor}</button>               
    );
}

export default Button;