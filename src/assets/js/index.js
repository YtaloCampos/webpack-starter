export class SetElements {
    constructor() {
        this.boxEl_img = document.querySelector(".img");
        this.boxEl_title = document.querySelector(".title");
        this.subBoxEl = document.querySelector(".sub-box");

        this.setImage();
        this.setTitle();
        this.setSmallTitle();
        this.setList();
    }

    setImage() {
        let imgEl = document.createElement("img");
        imgEl.classList.add("image_webpack");
        imgEl.setAttribute("src", "https://avatars3.githubusercontent.com/u/25012217?s=400&v=4");
    
        this.boxEl_img.appendChild(imgEl);
    }
    
    setTitle() {
        let titleEl = document.createElement("h1");
        titleEl.classList.add("title_webpack");
        titleEl.appendChild(document.createTextNode("Webpack Basic Starterkit"));
    
        this.boxEl_img.appendChild(titleEl);
    }

    setSmallTitle() {
        let smallTitleEl = document.createElement("h2");
        smallTitleEl.classList.add("small_title");
        smallTitleEl.appendChild(document.createTextNode("SUPPORT"));

        this.subBoxEl.appendChild(smallTitleEl);
    }

    setList() {
        var ulEl = document.createElement("ul");

        let values = ["ES6", "CSS", "BOOTSTRAP", "FONT AWESOME"];

        values.map(value => {
            var liEl = document.createElement("li");
            liEl.appendChild(document.createTextNode(value));

            ulEl.appendChild(liEl);
        })

        this.subBoxEl.appendChild(ulEl).classList.add('support_items');
    }
}