const years = [1980, 1934, 2002, 2019];

const year = new Date().getFullYear();

const age = years.map(function(item){
    return year-item
})

console.log(age);