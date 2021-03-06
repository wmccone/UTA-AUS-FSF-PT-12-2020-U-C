// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    // TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
    this.introduction = () => {
        console.log(`My name is ${this.name} my specialty is ${this.tech}`)
    }
};
    
// TODO: Create a new object using the 'Developer' constructor
const walt = new Developer('Walter', 'JavaScript')
// TODO: Call the 'introduction()' method on the new object
walt.introduction();
