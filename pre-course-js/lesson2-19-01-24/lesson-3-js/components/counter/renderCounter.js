import {Header} from "./header/Header.js";
import {Value} from "./value/Value.js";
import {Button} from "./button/Button.js";


export function renderCounter (someData) {
    document.body.innerHTML = '';
    //Header
    const header = Header(someData.title);
    document.body.append(header)
    //Value
    const value = Value(someData.count);
    document.body.append(value)
    //Button
    document.body.append(Button())
}
