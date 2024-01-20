import {renderCounter} from "../components/counter/renderCounter.js";

export const data = {
    title: 'Counter',
    count: 0
}


function changeData (){
    data.count++;
    renderCounter(data)
}

setInterval(changeData, 1000)