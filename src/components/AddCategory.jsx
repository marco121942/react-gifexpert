import {useState} from "react";

export const AddCategory =({onNewCategory})=>{

    const [inputValue,setInputValue] = useState('One Puch')

    const onInputChange=({target})=>{
        setInputValue(target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        if (inputValue.trim().length<=1)return;
        // setCategories(categories=>[inputValue,...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
        // console.log(inputValue);
    }
    return(
        <form onSubmit={(event)=>onSubmit(event)}>
            <input type="text"
                   placeholder="Buscar gifs"
                   value={inputValue}
                   onChange={onInputChange}
            />
        </form>
    )
}