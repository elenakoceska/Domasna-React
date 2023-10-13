export const sayHello = ()=>{
    return {
            type:"SAY_HELLO",
            payload: "Hi and welcome to my first Redux App"
    }
}


export const sayGoodbye = () => {
    return{
        type:"GOODBYE",
        payload:"See you later"
    }
}
