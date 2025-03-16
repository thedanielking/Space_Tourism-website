
const fetchCrewDescription = (crew) =>{
    const fetchPromise = fetch("./jsonfile/data.json");

    fetchPromise
    .then((response)=>{
        if(!response.ok){
            throw new Error(`Http error: ${response.status}`)
        }
        return response.json();
    })
    .then((data)=>{
        data["crew"].forEach(item=>{
            if(crew == item.name){
                updateCrew(item)
            }
        })
    })


}





function changeCrews(){
    let crews = document.querySelectorAll("#crews li");

    crews.forEach((crew)=>{
        crew.addEventListener("click", ()=>{
            fetchCrewDescription(crew.dataset.name);
        })
    })
}



const updateCrew = (crewDescription)=>{
    let section = document.createElement("section");
    section.classList.add("flex")
    section.classList.add("flex-col")
    section.classList.add("items-center")
    section.classList.add("justify-center")
    section.classList.add("gap-4")
    section.classList.add("lg:flex-row-reverse")
    section.classList.add("lg:gap-12")
    section.classList.add("animate-[fadeIn_1s_ease-in-out_forwards]")

    section.innerHTML =
    `<img src="${crewDescription.images["png"]}" alt="${crewDescription.name}" class="w-60 lg:w-100 p-6">
    <article class="text-gray-400 p-4 flex flex-col gap-4 lg:flex-col-reverse lg:justify-between lg:gap-12">

    <ul class="flex gap-4 items-center justify-center lg:justify-start" id="crews">
        <li class="border rounded-full w-3 h-3 cursor-pointer" onclick="changeCrews()"  data-name="Douglas Hurley"></li>
        <li class="border rounded-full w-3 h-3 cursor-pointer" data-name="Mark Shuttleworth"></li>
        <li class="border rounded-full w-3 h-3 cursor-pointer" data-name="Victor Glover"></li>
        <li class="border rounded-full w-3 h-3 cursor-pointer" data-name="Anousheh Ansari"></li>
    </ul>

      <div class="">
        <h2 class="text-center uppercase lg:text-lg lg:text-xl lg:text-left">${crewDescription.role}</h2>
        <h1 class="uppercase text-center text-3xl text-white lg:text-left lg:text-4xl">${crewDescription.name}</h1>
        <p class="text-sm mt-4 text-center lg:text-left">${crewDescription.bio}
        </p>
      </div>
    </article>`

    let oldChild = document.body.querySelector("main").children[1];

    document.body.querySelector("main").replaceChild(section, oldChild);

    let crews = document.querySelectorAll("#crews li");

    crews.forEach((crew)=>{
        if(crew.dataset.name == crewDescription.name){
            crews.forEach(item=>{
                item.classList.remove("activeBtn")
            })
            crew.classList.add("activeBtn")
        }
    })


    changeCrews();
}

changeCrews();























