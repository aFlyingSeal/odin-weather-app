function createInputContainer(){
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    const inputForm = document.createElement('form');
    inputForm.id = 'input-form';

    const cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.id = 'city-input';
    cityInput.name = 'cityName';

    const submitBtn = document.createElement('button');
    submitBtn.id = 'submit-btn';
    submitBtn.textContent = 'Enter';

    inputForm.appendChild(cityInput);
    inputForm.appendChild(submitBtn);

    const tempSwitchBtn = document.createElement('button');
    tempSwitchBtn.id = 'temp-switch-btn';
    tempSwitchBtn.textContent = 'Fahrenheit';

    inputContainer.appendChild(inputForm);
    inputContainer.appendChild(tempSwitchBtn);

    return {
        inputContainer,
        inputForm,
        tempSwitchBtn
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