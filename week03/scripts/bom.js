const input = document.querySelector('#favchap');
const button = document.querySelector('#submitbutton');
const list = document.querySelector('.list'); 
console.log(input);

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', addChapter);

function addChapter() {
    if (input.value != "") {
        /* Get the content of input */
        inputContent = input.value;
        /* Create li and button element */
        li = document.createElement('li'); 
        deleteButton = document.createElement('button');
        /* Add content to the elements*/
        li.textContent = inputContent;
        deleteButton.textContent = "❌";
        /* Append the elements */
        li.appendChild(deleteButton)
        list.appendChild(li);
        /* Delete button event listener, empty input box and focus */
        deleteButton.addEventListener('click', test1 => {
            document.querySelector('.list li').remove();
            input.focus();
        });
        input.value = '';
        input.focus();
    }   
}