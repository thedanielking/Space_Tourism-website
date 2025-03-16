const fetchSpaceVehicleDescription = (vehicle) =>{
    const fetchPromise = fetch("../starter-code/data.json");

    fetchPromise
    .then((response)=>{
        if(!response.ok){
            throw new Error(`Http error: ${response.status}`)
        }
        return response.json();
    })
    .then((data)=>{
        data["technology"].forEach(item=>{
            if(vehicle == item.name){
                updateVehicle(item)
            }
        })
    })


}


function changeVehicles(){
    let spaceVehicles = document.querySelectorAll(".spaceVehicles button");

    spaceVehicles.forEach((vehicle)=>{
        vehicle.addEventListener("click", ()=>{
            fetchSpaceVehicleDescription(vehicle.dataset.name)
        })
    })
    
}
changeVehicles();



const updateVehicle = (vehicleDescription)=>{
    let section = document.createElement("section");
    section.classList.add("flex")
    section.classList.add("flex-col")
    section.classList.add("items-center")
    section.classList.add("justify-center")
    section.classList.add("gap-6")
    section.classList.add("lg:flex-row-reverse")
    section.classList.add("lg:gap-12")
    section.classList.add("animate-[fadeIn_1s_ease-in-out_forwards]")

    section.innerHTML =
    `<picture>
            <source media = "(min-width: 1024px)" srcset="${vehicleDescription.images["portrait"]}" width="1500px" >
            <img src="${vehicleDescription.images["landscape"]}" alt="launch vehicle">
        </picture>
        <article class="text-gray-400 p-4 flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-12">

          <div class="spaceVehicles flex gap-6 items-center justify-center lg:justify-start lg:flex-col">
            <button class="border rounded-full w-10 h-10" data-name="Launch vehicle">1</button>
            <button class="border rounded-full w-10 h-10" data-name="Spaceport">2</button>
            <button class="border rounded-full w-10 h-10" data-name="Space capsule">3</button>
          </div>

          <div class="">
            <h2 class="text-center uppercase lg:text-lg lg:text-xl lg:text-left">The Technology...</h2>
            <h1 class="uppercase text-center text-3xl text-white lg:text-left lg:text-4xl">${vehicleDescription.name}</h1>
            <p class="text-sm mt-4 text-center lg:text-left">${vehicleDescription.description}</p>
          </div>
        </article>`

    let oldChild = document.body.querySelector("main").children[1];

    document.body.querySelector("main").replaceChild(section, oldChild);

    let spaceVehicles = document.querySelectorAll(".spaceVehicles button");

    spaceVehicles.forEach((vehicle)=>{
        if(vehicle.dataset.name == vehicleDescription.name){
            spaceVehicles.forEach(item=>{
                item.classList.remove("activeBtn")
            })
            vehicle.classList.add("activeBtn")
        }
    })

    changeVehicles();
}












































