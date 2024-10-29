/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // get breed name fromt the URL (assuming its the part after "/breeds")
        const breed = url.split("/")[4];

        /*------------ Create new dog card with the url above ------------- */
        // create new list item <li> to hold the dog card
        const newDogCard = document.createElement("li");

        // set up the structure of the dog card
        newDogCard.innerHTML = `
            <figure>
                <img src="${url}" alt="${breed}" />
                <figcaption>${breed}</figcaption?
            </figure>
        `;

        /* Add the new dog card as a child to the ul in the .gallery element */
        const galleryList = document.querySelector(".gallery > ul");
        galleryList.appendChild(newDogCard);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    const galleryList = document.querySelector(".gallery > ul");
    const firstDogCard = galleryList.querySelector("li");

    /*-------------------- Remove the first dog card --------------------- */
    if (firstDogCard) {
        galleryList.removeChild(firstDogCard);
    }
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    const galleryList = document.querySelector(".gallery > ul");
    const lastDogCard = galleryList.querySelector("li:last-child");

    /*-------------------- Remove the last dog card ----------------------- */
    if (lastDogCard) {
        galleryList.removeChild(lastDogCard);
    }
});
