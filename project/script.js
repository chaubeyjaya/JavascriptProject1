// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks
function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks
function render() {
    document.querySelectorAll(".task-container").forEach(c => c.innerHTML = "");

    tasks.forEach(t => {
        const el = document.createElement("div");
        el.className = "task";
        el.draggable = true;
        el.id = t.id;

        el.innerHTML = `
            <h4>${t.title}</h4>
            <p>${t.desc}</p>
            <button class="delete-btn" onclick="removeTask('${t.id}')">Delete</button>
        `;

        el.addEventListener("dragstart", e => {
            e.dataTransfer.setData("id", t.id);
        });

        document.getElementById(t.status).appendChild(el);
    });
}

function removeTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    save();
    render();
}

// -------- Add Task Popup --------
const modal = document.getElementById("taskModal");
document.getElementById("addTaskBtn").onclick = () => modal.style.display = "flex";
document.getElementById("closeModal").onclick = () => modal.style.display = "none";

document.getElementById("saveTask").onclick = () => {
    const title = document.getElementById("taskTitle").value;
    const desc = document.getElementById("taskDesc").value;

    if (!title.trim()) return alert("Enter task title!");

    tasks.push({
        id: Date.now().toString(),
        title,
        desc,
        status: "todo"
    });

    save();
    render();
    modal.style.display = "none";

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDesc").value = "";
};

// -------- Drag & Drop --------
document.querySelectorAll(".task-container").forEach(box => {
    box.ondragover = e => e.preventDefault();

    box.ondrop = e => {
        const id = e.dataTransfer.getData("id");
        const task = tasks.find(t => t.id === id);
        task.status = box.id;

        save();
        render();
    };
});

// Initial load
render();
