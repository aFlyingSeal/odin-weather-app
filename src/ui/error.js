export default function createErrorElement(){
    const error = document.createElement('p');
    error.classList.add('error-message');
    return error;
}