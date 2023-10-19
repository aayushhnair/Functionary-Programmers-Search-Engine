const searchInput = document.getElementById('searchInput');
const functionList = document.getElementById('functionList');
const sampleProgramOutput = document.getElementById('sampleProgramOutput');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm.trim() === '') {
        // If there's no input, set the display to be blank
        functionList.innerHTML = '';
    } else {
        fetch(`/api/functions2?term=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                displayFunctions(data, searchTerm);
            })
            .catch(error => console.error('Error:', error));
    }
});

function displayFunctions(functions, searchTerm) {
    functionList.innerHTML = '';
    functions.forEach(func => {
        // Check if function name or description contains the search term
        if (func.functionName.toLowerCase().includes(searchTerm) || func.description.toLowerCase().includes(searchTerm)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${func.functionName} - ${func.description} ( ${func.Library} )`;
            listItem.style.cursor = 'pointer';
            listItem.addEventListener('click', () => {
                // When a list item is clicked, request sample program from ChatGPT API
                requestSampleProgram(func.functionName);
            });
            functionList.appendChild(listItem);
        }
    });
}


