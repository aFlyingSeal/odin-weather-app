function createInputContainer(){
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    const cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.id = 'city-input';

    const submitBtn = document.createElement('button');
    submitBtn.id = 'submit-btn';
    submitBtn.textContent = 'Enter';

    inputContainer.appendChild(cityInput);
    inputContainer.appendChild(submitBtn);

    return {
        inputContainer,
        cityInput,
        submitBtn
    };
}

function createDisplayContainer(){
    const displayContainer = document.createElement('div');
    displayContainer.classList.add('display-container');

    displayContainer.innerHTML = `
        <div class="weather-container">
            <p class="display-emoji"></p>
            <p class="display-overall"></p>
            <p class="display-temp"></p>
            <p class="display-feels"></p>
            <p class="display-wind"></p>
            <p class="display-humid"></p>
        </div>

        <div class="forecast-container">

        </div>
    `;

    return displayContainer;
}

export {
    createInputContainer,
    createDisplayContainer
}