// za Domashna: da se dodade vo kodot od casot nova componenta so novi reducer i actions fajlovi so minimum 2 akcii

export const firstAction = () => {
    return {
            type:"HOMEWORK_1",
            payload: "This is my homework!"
    }
}


export const secondAction = () => {
    return{
        type:"HOMEWORK_2",
        payload:"This is also my homework!"
    }
}
