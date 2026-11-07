const images = [
    {
        src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000",
        title: "مسجد زیبا",
        description: "این مکان یکی از زیباترین بناهای تاریخی است."
    },

    {
        src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1000",
        title: "طبیعت زیبا",
        description: "منظره زیبای طبیعت با آسمان روشن."
    },

    {
        src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1000",
        title: "معماری مدرن",
        description: "ساختمان های زیبا با طراحی مدرن."
    },

    {
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000",
        title: "منظره کوهستان",
        description: "طبیعت سرسبز و کوه های زیبا."
    },

    {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",
        title: "طبیعت سرسبز",
        description: "تصویری زیبا از طبیعت و چشم اندازهای دیدنی."
    }
];

const mainPhoto = document.getElementById("mainPhoto");
const title = document.getElementById("title");
const description = document.getElementById("description");
const thumbnails = document.getElementById("thumbnails");

// ساخت تصاویر کوچک
images.forEach((image, index) => {

    const img = document.createElement("img");

    img.src = image.src;
    img.alt = image.title;

    if (index === 0) {
        img.classList.add("active");

        mainPhoto.src = image.src;
        title.textContent = image.title;
        description.textContent = image.description;
    }

    // تغییر عکس با کلیک
    img.addEventListener("click", function() {

        mainPhoto.src = image.src;

        title.textContent = image.title;

        description.textContent = image.description;

        document.querySelectorAll(".thumbnails img")
            .forEach(item => {
                item.classList.remove("active");
            });

        img.classList.add("active");

    });

    thumbnails.appendChild(img);

});