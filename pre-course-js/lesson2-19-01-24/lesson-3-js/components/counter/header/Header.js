
export function Header(someData) {
    const titleElement = document.createElement('h1');
    titleElement.append(someData);
    return titleElement;
}