const inputProduct = document.getElementById("product")
const form = document.querySelector("form")
const button = document.querySelector("button")
const listProduct = document.querySelector(".listProducts")
const alert = document.querySelector(".alert")
const removeIcon= document.querySelector(".productItem .hgi-delete-02")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    if(inputProduct.value != ""){

        const newList = document.createElement("li")
        newList.classList.add("productItem")
        newList.setAttribute("id", idLi);

        const newCheck = document.createElement("input")
        newCheck.setAttribute("type", "checkbox")

        const newName = document.createElement("paragraph")
        newName.classList.add("paragraph")
        newName.textContent = inputProduct.value

        const newDelete = document.createElement("i")
        newDelete.classList.add("hgi", "hgi-stroke", "hgi-delete-02")
        newDelete.setAttribute("onclick", "removeItem(this)")

        listProduct.append(newList)
        newList.append(newCheck, newName, newDelete)

        inputProduct.value = ""
    }else{
        const labelAlert = document.querySelector(".label")

        inputProduct.classList.add("inputAlert")
        labelAlert.textContent = "Digite o nome do produto"
        alert.classList.add("show-alert")

        setTimeout(() => {
            inputProduct.classList.remove("inputAlert")
            alert.classList.remove("show-alert")
        }, 2000);
    }
})

function removeItem(element) {

    // Encontra o elemento pai mais próximo que seja um .productItem
    const item = element.closest(".productItem");

    // Se o item existir, remove ele
    if (item) {
        item.remove();
        alert.classList.add("show-alert")
        setTimeout(() => {
            inputProduct.classList.remove("inputAlert")
            alert.classList.remove("show-alert")
        }, 2000);
        return true; // Retorna true indicando que foi removido
    }

    return false; // Retorna false caso nada tenha sido removido
}
