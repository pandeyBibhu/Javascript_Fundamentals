console.log("This is mine MOdule example in Javascript")

export let name="Bibhu";
export let age=30
export let location="Bangalore"

export const employeeDetails=()=>{
    const eName="Bibhu";
    const eAge=50;
    const eLoc="Bangalore"

    return `Employee name is ${eName} and Age is ${eAge} and Location is ${eLoc}`
}
const firstModule={name,age,location,employeeDetails};

export default firstModule;