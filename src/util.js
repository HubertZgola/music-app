import {v4 as uuidv4} from "uuid";

function chillHop(){
    return [
        {
            name: "Inhale/Ad Astra",
            cover:"https://chillhop.com/wp-content/uploads/2023/09/7c0628588f526e9948f21027903e146430db4b82-1024x1024.jpg",
            artist:"Boukas, A D M B",
            audio:'https://stream.chillhop.com/mp3/55235',
            color:['#FD740F','#CAA38A'],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Fall Out",
            cover:"https://chillhop.com/wp-content/uploads/2023/09/17f2e39aa91d84a4391aed6eddd862145c378434-1024x1024.jpg",
            artist:"The Doppelgangaz",
            audio:'https://stream.chillhop.com/mp3/68323',
            color:['#07A3A6','#DE669A'],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Roadtrips",
            cover:"https://chillhop.com/wp-content/uploads/2023/08/65f57918cd8ef03d204365b8e735f418b3196469-1024x1024.jpg",
            artist:"Arbour",
            audio:'https://stream.chillhop.com/mp3/62379',
            color:['#53726C','#392D1F'],
            id: uuidv4(),
            active: false,
        },
        {
            name: "A Reminder",
            cover:"https://chillhop.com/wp-content/uploads/2023/01/4a42f136486d42e4d021c673540885c82a1934e6-1024x1024.jpg",
            artist:"Sleepy Fish, coa",
            audio:'https://stream.chillhop.com/mp3/36925',
            color:['#A40F0B','#004143'],
            id: uuidv4(),
            active: false,
        },
    ];
}

export default chillHop;