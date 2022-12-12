
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]


/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/


const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify
    //first make a way for the fucntion to access the flower array
    for (const flower of flowers) {
        // next make an if statement accessing the price key in the flower object
        if (flower.price < 2.00) {
            //push the flowers that fit onto the filteredFlower array
            filteredFlowers.push(flower)
        }
    }

    // Write your algorithm first, and then your code. Feel free to remove this comment
    // Do not modify

    return filteredFlowers
}

//console log to see it 
//console.log(inexpensiveFlowers()) 

/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/

const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify
    // first make an for of to access the flower array
    for (const flower of flowers) {
        // next access the zone key inside of the flower object
        if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
            // next .push the flowers onto the filtered array
            filteredFlowers.push(flower)
        }
    }

    return filteredFlowers  // Do not modify
}
//console log to see it 
console.log(zoneFlowers()) 

/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = [] // Do not modify
    // first make the array accesible by the function
    for (const flower of flowers) {
        // next assess the color of the flower you want; orange
        if (flower.colors.includes("Orange")) {
            // next write the statement that .pushes the wanted flowers onto the filtered array
            filteredFlowers.push(flower)
        }
    }

    // filter out all the inexpensive flowers from the objects array above
    // Write your algorithm first, and then your code. Feel free to remove this comment
    return filteredFlowers // Do not modify
}
// log it to see if you did it correctly
//console.log(orangeFlowers())

/*
    This function should return an HTML representation of each flower.
 
    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>
 
            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>
 
            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify
    // first allow the function to access the flower Array with a for of loop
    for (const flower of flowers) {
        //wrap the whole thing in an article tag
        flowersHTMLString += `<article>\n\t<h1>${flower.type}</h1>`
        // add the <h2> to the string

        // make a for of loop that accesses each color of each flower
        //place <h2> on outside of loop so it only goes once
        flowersHTMLString += `\n\n\t<h2>Colors</h2>`
        for (const color of flower.colors) {
            // wrap each color in a section element
            flowersHTMLString += `\n\t<section>${color}</section>`
        }
        //place <h2> on outside of loop so it only goes once
        flowersHTMLString += `\n\n\t<h2>USDA Zones</h2>`
        // make a for of loop that accesses each zone each flower grows in
        for (const zone of flower.usdaZones) {
            //wrap each zone in a div
            flowersHTMLString += `\n\t<div> ${zone}</div>`
        }

        /*
            Algorithmic thinking is most important on this one.
            We would rather see the correct algorithm than the
            correct code. If you have code that works, but no
            algorithm, then you failed the exercise.
        
    
        */
        //once the loop ends all the closing <article> tag
        flowersHTMLString += `\n</article>`

    }

    return flowersHTMLString  // Do not modify
}

//console.log(flowersAsHTML(flowers)) // you dont need parameter of flowers

//console.log(flowersAsHTML())

/*
for (const book of notes) {
    booksArticle += `<article>${book.text}`
    for (const topics of book.topics) {
    booksArticle += `<section>${topics.colors}</section>`
    }
    booksArticle += '</article>'
}

    console.log(booksArticle)
*/

/*
    for(const color of flowers.colors) {
        flowersHTMLString += `<h2>Colors</h2><section>${color}.</section>` 
    }
    */








































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

