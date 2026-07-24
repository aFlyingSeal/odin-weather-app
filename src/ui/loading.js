export default function createLoadingElement(){
    const loadingElement = document.createElement('div');
    loadingElement.id = 'loading-indicator';

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    const loadingText = document.createElement('div');
    loadingText.id = 'loading-text';
    loadingText.textContent = 'Loading'

    loadingElement.appendChild(spinner);
    loadingElement.appendChild(loadingText);

    return loadingElement;
}