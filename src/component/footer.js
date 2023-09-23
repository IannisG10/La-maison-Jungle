import React,{useState} from "react";
import '../css/footer.css';

function Footer(){
    const[inputValue,setInputValue] = useState('');

    function handleInput(e){
        setInputValue(e.target.value);
    }
    function handleBlur(){
        if(!inputValue.includes('@')){
            alert('Attention! Votre mail doit inclure un "@"!! ')
        }
    }

    return(
        <footer className="lmj-footer">
            <div className="">Pour les passionnés de plantes 🍃🥀 </div>
            <div>Laissez nous votre e-mail!😇 </div>
            <input
                placeholder="Entrer votre e-mail"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleBlur}
                />
        </footer>
    );
}

export default Footer;