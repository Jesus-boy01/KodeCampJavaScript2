const teamZeusMembers = [
    {
        fullName: "Simple Soul",
        image: "img/Abdur-roheem-Sherif-deen.jpg",
        bestFood: "Bread with Togo Beans",
        track: "Front-End",
        bestMovie: "Hercules",
        complexion: "Chocolate",
        learnt: ["HTML", " CSS", " Bootstrap"]
    },
    
    {
        fullName: "OreSauce",
        image: "img/Oreoluwa-Oloyede.jpg",
        bestFood: "Egusi soup with Amala",
        track: "Front-End",
        bestMovie: "None",
        complexion: "Dark",
        learnt: ["HTML", " CSS", " Bootstrap"]
    },
    
    {
        fullName: "Khalid",
        image: "img/Adeleke-Olalekan-Daniel.png",
        bestFood: "Marinated Cookie",
        track: "Front-End",
        bestMovie: "Queen of the Damned",
        complexion: "Dark",
        learnt: ["HTML", " CSS", " Bootstrap"]
    },
    
    {
        fullName: "Luchii",
        image: "img/Chukwu-Cynthia-Oluchukwu.jpg",
        bestFood: "Egusi soup with Fufu",
        track: "Front-End",
        bestMovie: "Emergency",
        complexion: "Fair",
        learnt: ["HTML", " CSS", " Bootstrap"]
    },

    {
        fullName: "Tolzman",
        image: "img/Adeyemi-Dada-Tolulope.jpg",
        bestFood: "Jollof Rice and Chicken",
        track: "Front-End",
        bestMovie: "Attack on Titans",
        complexion: "Fair",
        learnt: ["HTML", " CSS", " Bootstrap"]
    },
    
    {
        fullName: "G'nostics",
        image: "img/Paul-Nonso-Ihejirika.png",
        bestFood: "Spaghetti/Okro Soup",
        track: "Front-End",
        bestMovie: "Game of Thrones",
        complexion: "Fair",
        learnt: ["HTML", " CSS", " Bootstrap"]
    },
    
    {
        fullName: "MavDavis",
        image: "img/David-Marvelous.png",
        bestFood: "Rice",
        track: "Front-End",
        bestMovie: "Teen Wolf",
        complexion: "Dark",
        learnt: ["HTML", " CSS", " Bootstrap"]
    },
    
    {
        fullName: "HayJ",
        image: "img/Balikis-Ajoke-Ekun.jpg",
        bestFood: "Spaghetti",
        track: "Front-End",
        bestMovie: "Smart Money Woman",
        complexion: "Fair",
        learnt: ["HTML", " CSS", " Bootstrap"]
    },
    
    {
        fullName: "TJ",
        image: "img/tijani-idris.png",
        bestFood: "Eba with Efo-Riro",
        track: "Front-End",
        bestMovie: "None",
        complexion: "Fair",
        learnt: ["HTML", " CSS", " Bootstrap"]
    }
] 

let row = document.querySelector(".row");

for (let i = 0; i < teamZeusMembers.length; i++) {
    let memberDetails = `<div class="col-lg-4 col-md-6 col-12">
                            <div class="card mb-4">
                                <div class="card-head text-center my-2">
                                    <img ${teamZeusMembers[i].image} src="${teamZeusMembers[i].image}" style="width: auto; height: 200px;" class="img-fluid rounded-circle" alt="Member Image">
                                </div>
                                <div class="card-body text-center fs-5">
                                    <h2>Name: ${teamZeusMembers[i].fullName}</h2>
                                    <p>Best Food: ${teamZeusMembers[i].bestFood}</p>
                                    <p>Track: ${teamZeusMembers[i].track}</p>
                                    <p>Best Movie: ${teamZeusMembers[i].bestMovie}</p>
                                    <p>Complexion: ${teamZeusMembers[i].complexion}</p>
                                    <p>Learnt: ${teamZeusMembers[i].learnt}</p>
                                </div>
                                <button type="button" onclick="moreInfo(${i})" class="alert btn btn-success py-2 px-3 mb-0 fs-5">Click Me</button>
                            </div>
                        </div>`


        row.innerHTML += memberDetails;
}

function moreInfo(i) {
    alert(`You just clicked to know more about ${teamZeusMembers[i].fullName}`);
}
