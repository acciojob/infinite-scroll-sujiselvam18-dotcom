//your code here!

const list = document.getElementById("infi-list");

let count = 0;

// Function to add items
function addItems(num) {
    for (let i = 0; i < num; i++) {
        count++;
        const li = document.createElement("li");
        li.textContent = "List Item " + count;
        list.appendChild(li);
    }
}


addItems(10);


list.addEventListener("scroll", () => {
    // Check if scrolled to bottom
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addItems(2);
    }
});
