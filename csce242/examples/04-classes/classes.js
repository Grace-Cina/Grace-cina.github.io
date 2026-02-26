class Dog {
    constructor(title, breed, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const p = document.createElement("p");
        dogSection.classList.add("dog");

        //title
        const a1 = document.createElement("a");
        a1.href = "#";
        const h3 = document.createElement("h3");
        a1.append(h3);
        h3.textContent = this.title;
        dogSection.append(a1);


        return dogSection;
    }
}

const dogs = [];
dogs.push(new Dog("coco", "yorkie",5,"small","yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden Retriever", 2, "large", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald","Pit Bull", 1, "large", "pitt-bull.jpg"));

dogs.forEach((dog)=>{
    document.getElementById("dogs").append(dog.item);
});