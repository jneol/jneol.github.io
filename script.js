window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    DisplayTodos()

    const containerPending = document.querySelector("#container-pending");
    const form = document.querySelector("#add-task-form");

    const pendingBox = document.querySelector('#tasks');
    const completedBox = document.querySelector('#completed').children[0];

    // To-do list: Navigate to Completed
    const containerCompleted = document.querySelector('#container-completed');

    document.getElementById("nav-completed").addEventListener("click", function () {
        containerPending.classList.add("hidden");
        containerCompleted.classList.remove("hidden");

    })

    // To-do list: Navigate to Pending}
    document.getElementById("nav-pending").addEventListener("click", function () {
        containerPending.classList.remove("hidden");
        containerCompleted.classList.add("hidden");
    })

    // for (let i = 0; i < localStorage.length; i++) {
    //     const displayItemName = localStorage.key(i);
    //     const displayItemDate = localStorage.getItem(displayItemName);

    //     const newTaskInput = document.querySelector("#new-item");
    //     const newItemBox = document.createElement("div");
    //     const newItemDesc = document.createElement("div");
    //     const newItemName = document.createElement("div");
    //     const newItemDate = document.createElement("div");
    //     const newItemTools = document.createElement("div");
    //     const newItemEdit = document.createElement("button");
    //     const newItemDelete = document.createElement("button");
    //     const newItemDone = document.createElement("button");
    //     const completedItemDelete = document.createElement("button");



    //     newItemBox.classList.add("item");
    //     newItemName.classList.add("item-name");
    //     newItemName.innerText = displayItemName;
    //     newItemDesc.appendChild(newItemName);
    //     // 
    //     var dateWithouthSecond = new Date();
    //     dateWithouthSecond = dateWithouthSecond.toLocaleTimeString(navigator.language, { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    //     newItemDate.innerText = displayItemDate;
    //     newItemDate.classList.add("item-date");
    //     newItemDesc.appendChild(newItemDate);
    //     // 
    //     newItemTools.classList.add("tools");
    //     newItemEdit.classList.add("edit");
    //     newItemEdit.innerText = "Edit";
    //     newItemDelete.classList.add("delete");
    //     newItemDelete.innerText = "Delete";
    //     newItemDone.classList.add("done");
    //     newItemDone.innerText = "Done";
    //     newItemTools.appendChild(newItemEdit);
    //     newItemTools.appendChild(document.createTextNode(" "));
    //     newItemTools.appendChild(newItemDelete);
    //     newItemTools.appendChild(document.createTextNode(" "));
    //     newItemTools.appendChild(newItemDone);
    //     // 
    //     newItemBox.appendChild(newItemDesc);
    //     newItemBox.appendChild(newItemTools);
    //     // 
    //     containerPending.appendChild(newItemBox);


    // }


    // Add new item
    form.addEventListener('submit', (e) => {
        // Prevent page refresh when add new item (submit) button is clicked
        e.preventDefault();

        // Add new item;
        const newTaskInput = document.querySelector("#new-item");
        const newItemBox = document.createElement("div");
        const newItemDesc = document.createElement("div");
        const newItemName = document.createElement("div");
        const newItemDate = document.createElement("div");
        const newItemTools = document.createElement("div");
        const newItemEdit = document.createElement("button");
        const newItemDelete = document.createElement("button");
        const newItemDone = document.createElement("button");
        const completedItemDelete = document.createElement("button");

        if (newTaskInput.value != "") {

            // 
            newItemBox.classList.add("item");
            newItemName.classList.add("item-name");
            newItemName.innerText = newTaskInput.value;
            newItemDesc.appendChild(newItemName);
            // 
            var dateWithouthSecond = new Date();
            dateWithouthSecond = dateWithouthSecond.toLocaleTimeString(navigator.language, { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
            newItemDate.innerText = dateWithouthSecond;
            newItemDate.classList.add("item-date");
            newItemDesc.appendChild(newItemDate);
            // 
            newItemTools.classList.add("tools");
            newItemEdit.classList.add("edit");
            newItemEdit.innerText = "Edit";
            newItemDelete.classList.add("delete");
            newItemDelete.innerText = "Delete";
            newItemDone.classList.add("done");
            newItemDone.innerText = "Done";
            newItemTools.appendChild(newItemEdit);
            newItemTools.appendChild(document.createTextNode(" "));
            newItemTools.appendChild(newItemDelete);
            newItemTools.appendChild(document.createTextNode(" "));
            newItemTools.appendChild(newItemDone);
            // 
            newItemBox.appendChild(newItemDesc);
            newItemBox.appendChild(newItemTools);
            // 
            containerPending.appendChild(newItemBox);

            // Reset input box
            newTaskInput.value = "";

            // Navigate to Pending
            containerPending.classList.remove("hidden");
            containerCompleted.classList.add("hidden");

            const storedItem = {
                itemName: newItemName.innerText,
                itemDate: newItemDate.innerText
            }

            const todo = {
                item: newItemName.innerText,
                date: newItemDate.innerText,
                done: false
            }

            todos.push(todo);

            // Push to local storage

            localStorage.setItem('todos', JSON.stringify(todos));

            e.target.reset();

            // localStorage.setItem(newItemName.innerText, newItemDate.innerText);

            // Move item from Pending to Completed upon clicking the Done button.
            newItemDone.addEventListener('click', function () {
                let completedItemBox = newItemBox.cloneNode(true);

                completedBox.appendChild(completedItemBox);
                completedItemBox.classList.toggle("item-done");
                containerPending.removeChild(newItemBox);
                // Remove buttons
                completedItemBox.lastChild.remove();
                // Add delete button
                completedItemDelete.classList.add("delete");
                completedItemDelete.innerText = "Delete";
                completedItemBox.appendChild(completedItemDelete);

                // Delete button for completed items
                completedItemDelete.addEventListener('click', (e) => {
                    containerCompleted.removeChild(completedItemBox);
                });
            })

            DisplayTodos()

        } else {
            // alert("Please input a task!");
        }

    })
});




function DisplayTodos() {
    const pendingList = document.getElementById('container-pending');
    pendingList.innerHTML = "";
    const completedList = document.getElementById('container-completed');
    completedList.innerHTML = "";

    todos.forEach(todo => {
        // console.log(todo);


        const containerPending = document.querySelector("#container-pending");
        const containerCompleted = document.querySelector('#container-completed');
        const newTaskInput = document.querySelector("#new-item");
        const newItemBox = document.createElement("div");
        const newItemDesc = document.createElement("div");
        const newItemName = document.createElement("div");
        const newItemDate = document.createElement("div");
        const newItemTools = document.createElement("div");
        const newItemEdit = document.createElement("button");
        const newItemDelete = document.createElement("button");
        const newItemDone = document.createElement("button");
        const completedItemDelete = document.createElement("button");


        // // Delete function for items in Pending
        // newItemDelete.addEventListener('click', (e) => {
        //     containerPending.removeChild(newItemBox);
        //     localStorage.removeItem(newItemName);
        // });

        // 
        newItemBox.classList.add("item");
        newItemName.classList.add("item-name");
        newItemName.innerText = todo.item;
        newItemDesc.appendChild(newItemName);
        // 
        // var dateWithouthSecond = new Date();
        // dateWithouthSecond = dateWithouthSecond.toLocaleTimeString(navigator.language, { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        newItemDate.innerText = todo.date;
        newItemDate.classList.add("item-date");
        newItemDesc.appendChild(newItemDate);
        // 
        newItemTools.classList.add("tools");
        newItemEdit.classList.add("edit");
        newItemEdit.innerText = "Edit";
        newItemDelete.classList.add("delete");
        newItemDelete.innerText = "Delete";
        newItemDone.classList.add("done");
        newItemDone.innerText = "Done";
        newItemTools.appendChild(newItemEdit);
        newItemTools.appendChild(document.createTextNode(" "));
        newItemTools.appendChild(newItemDelete);
        newItemTools.appendChild(document.createTextNode(" "));
        newItemTools.appendChild(newItemDone);
        // 
        newItemBox.appendChild(newItemDesc);
        newItemBox.appendChild(newItemTools);
        // 
        if (!todo.done) {
            // display pending items stored in localStorage
            // const todoItem = document.createElement('div');
            // todoItem.classList.add('todo-item');
            containerPending.appendChild(newItemBox);
        } else {
            newItemBox.classList.toggle("item-done");
            containerCompleted.appendChild(newItemBox);
            // display completed items saved in localStorage
        }

        // Delete Item
        newItemDelete.addEventListener('click', (e) => {
            todos = todos.filter(t => t != todo);
            localStorage.setItem('todos', JSON.stringify(todos));
            DisplayTodos()
        })

        // Mark item as done
        newItemDone.addEventListener('click', (e) => {
            // Re-using delete function's codes to remove it from Pending list.
            todos = todos.filter(t => t != todo);
            localStorage.setItem('todos', JSON.stringify(todos));

            //  Re-using creation of divs forEach todo.
            newItemBox.classList.add("item");
            newItemName.classList.add("item-name");
            newItemName.innerText = todo.item;
            newItemDesc.appendChild(newItemName);
            newItemDate.innerText = todo.date;
            newItemDate.classList.add("item-date");
            newItemDesc.appendChild(newItemDate);
            // 
            newItemTools.classList.add("tools");
            newItemEdit.classList.add("edit");
            newItemEdit.innerText = "Edit";
            newItemDelete.classList.add("delete");
            newItemDelete.innerText = "Delete";
            newItemDone.classList.add("done");
            newItemDone.innerText = "Done";
            newItemTools.appendChild(newItemEdit);
            newItemTools.appendChild(document.createTextNode(" "));
            newItemTools.appendChild(newItemDelete);
            newItemTools.appendChild(document.createTextNode(" "));
            newItemTools.appendChild(newItemDone);
            // 
            newItemBox.appendChild(newItemDesc);
            newItemBox.appendChild(newItemTools);

            newItemBox.classList.toggle("item-done");
            containerCompleted.appendChild(newItemBox);

            // Add done item to localStorage.
            const todoCompleted = {
                item: newItemName.innerText,
                date: newItemDate.innerText,
                done: true
            }
            todos.push(todoCompleted);
            // Push to local storage
            localStorage.setItem('todos', JSON.stringify(todos));
            DisplayTodos();

        })

    });
};


// Clear All button
document.getElementById("delete-all").addEventListener('click', (e) => {
    e.preventDefault();
    // getElementsByClassName returns an array of ALL instances of elements with that ClassName, even if there's only one element with that ClassName.
    // var items = document.getElementsByClassName("item");
    // // Using a for loop, we can loop through each and every instance of the elements with that ClassName.
    // // for (let i = 0; i < items.length; i++) {
    // while (items.length > 0) {
    //     // items[i].remove();
    //     containerPending.removeChild(items[0]);
    // }
    localStorage.clear();
    location.reload();
});

