declare var Artyom: any;

window.addEventListener("load", function (): void {

    const input: HTMLInputElement = (document.getElementById("toDo") as HTMLInputElement);
    const wrapper: HTMLElement = document.getElementById("todoWrapper");

    let todoCount: number = 0;
    let openCount: number = 0;
    let doneCount: number = 0;

    input.addEventListener("keydown", function (event: KeyboardEvent): void {
        if (event.key === "Enter") {
            let todoText: string = input.value;
            createToDo(todoText);
            clearInput();
        }
    });

    function updateCounter(): void {
        document.querySelector("#counterToDos").innerHTML = String(todoCount);

    }

    function updateOpenCounter(): void {
        document.querySelector("#counterOpen").innerHTML = String(openCount);

    }

    function updatedoneCounter(): void {
        document.querySelector("#counterDone").innerHTML = String(doneCount);
    }

    function clearInput(): void {
        input.value = "";
    }

    function createToDo(todoText: string): void {
        todoCount++;
        openCount++;
        updateCounter();
        updateOpenCounter();
        updatedoneCounter();

        const todoItem: HTMLDivElement = document.createElement("div");
        const checkbox: HTMLInputElement = document.createElement("input");
        const label: HTMLElement = document.createElement("label");
        const trashButton: HTMLElement = document.createElement("i");

        todoItem.className = "todoItem";
        checkbox.type = "checkbox";
        checkbox.className = "checkBox";
        checkbox.addEventListener("click", function (event: Event): void {
            let isChecked: boolean = checkbox.checked;
            if (isChecked === true) {
                doneCount++;
                openCount--;
            } 
            else {
                doneCount--;
                openCount++;
            }
            updateOpenCounter();
            updatedoneCounter();

        });

        label.innerHTML = todoText;
        label.className = "divLabel";
        trashButton.className = "fas fa-trash-alt";

        wrapper.appendChild(todoItem);
        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);
        todoItem.appendChild(trashButton);

        trashButton.addEventListener("click", function (): void {
            deleteItem(todoItem);
            if (checkbox.checked === true) {
                doneCount--;
            }
            else {
                openCount--;
            }
            updateOpenCounter();
            updatedoneCounter();
        });
    }

    function deleteItem(item: HTMLElement): void {

        wrapper.removeChild(item);
        todoCount--;
        updateCounter();
    }

    const artyom: any = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void {
            createToDo(wildcard);
        }
    });

    function startContinuousArtyom(): void {
        artyom.fatality();

        setTimeout(
            function (): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function (): void {
                    console.log("Ready!");
                });
            },
            250);
    }
    
    document.querySelector("#Artyom").addEventListener("click", function (): void {
        startContinuousArtyom();
        (document.querySelector("#Artyom") as HTMLButtonElement).disabled = true;
    });

});