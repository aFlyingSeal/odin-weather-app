export default function createLoadingElement(){
    const loadingElement = document.createElement('p');
    loadingElement.classList.add('loading-indicator');
    loadingElement.textContent = 'Loading...';

    return loadingElement;
}