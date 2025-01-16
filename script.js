'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function addTask() {
    const task = document.getElementById("task");
    const taskVal = task.value.trim();
    const details = document.getElementById("details");
    const detailsVal = details.value.trim();
    const list = document.getElementById("list");

    // タスク入力チェック
    if (taskVal === "") {
        alert("タスクを入力してください。");
        return;
    }

    const taskItem = document.createElement("label");
    taskItem.className = "taskItem";
    taskItem.textContent = "タスク：" + taskVal;

    const detailsItem = document.createElement("label");
    detailsItem.className = "detailsItem";

    if (detailsVal) {
        detailsItem.textContent = "詳細：" + detailsVal;
    }
    
    const rank = document.getElementById("rank");
    const rankVal = rank.value; //high, middle, low

    // 優先度入力チェック
    if (rankVal === "") {
        alert("優先度を入力してください。");
        return;
    }

    // 優先度表示
    const rankItem = document.createElement("label");
    rankItem.className = `${rankVal}`

    if (rankVal === "high") {
        rankItem.textContent = "優先度：高"
    } else if (rankVal === "middle") {
        rankItem.textContent = "優先度：中"
    } else if (rankVal === "low") {
        rankItem.textContent = "優先度：低"
    }

    // チェックボックス設定
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "checkBox"
    checkBox.addEventListener("change", function() {
        if (checkBox.checked) {
            list.removeChild(allTasks);
        }
    })
    
    // リストの作成
    const tasks = document.createElement("div");
    tasks.className = "label-container";

    const allTasks = document.createElement("div");
    allTasks.className = "task-container"

    allTasks.style.border = "solid";
    allTasks.style.backgroundColor = "FloralWhite";

    // 優先度ごとに色分け
    if (rankVal === "high") {
        allTasks.style.borderLeft = "8px solid red";
    } else if (rankVal === "middle") {
        allTasks.style.borderLeft = "8px solid yellow";
    } else if (rankVal === "low") {
        allTasks.style.borderLeft = "8px solid blue";
    }

    allTasks.style.padding = "5px";
    allTasks.appendChild(checkBox);

    // 各項目をlabelに入れる
    tasks.appendChild(taskItem);
    tasks.appendChild(detailsItem);
    tasks.appendChild(rankItem);

    // ul要素にタスクを追加
    allTasks.appendChild(tasks);
    list.appendChild(allTasks);
    
    // インプット部クリア
    task.value = "";
    rank.selectedIndex = 0;
    details.value = "";
}

const button = document.getElementById("addButton");
button.addEventListener("click", addTask);
