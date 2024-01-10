const ProjectList = [
    {
        url: "Genuary 2024/10 - Hexagonal/index.html",
        folder: "Genuary 2024"
    },
    {
        url: "Genuary 2024/9 - ASCII/index.html",
        folder: "Genuary 2024"
    },
    {
        url: "Genuary 2024/8 - Chaotic system/index.html",
        folder: "Genuary 2024"
    },
    {
        url: "Genuary 2024/7 - Progress bar/index.html",
        folder: "Genuary 2024"
    },
    {
        url: "Genuary 2024/6 - Screensaver/index.html",
        folder: "Genuary 2024"
    },
    {
        url: "Genuary 2024/5 - In the style of Vera Molnar/index.html",
        folder: "Genuary 2024"
    },
    {
        url: "Genuary 2024/4 - Pixels/index.html",
        folder: "Genuary 2024"
    },
    {
        url: "Genuary 2024/3 - Droste effect/index.html",
        folder: "Genuary 2024"
    },
    {
        url: "Genuary 2024/2 - No palettes/index.html",
        folder: "Genuary 2024"
    },
    {
        url: "Genuary 2024/1 - Particles, lots of them/index.html",
        folder: "Genuary 2024"
    },
    {
        url: "motion extraction/index.html",
        folder: "Tools",
    },
    {
        url: "mcgill hackathon 2023/index.html",
        folder: "Simulations",
    },
    {
        url: "distance minimization/index.html",
        folder: "Tools",
    },
    {
        url: "cloth simulation/index.html",
        folder: "Simulations",
        rating: 4.5
    },
    {
        url: "RAYCASTING_2/index.html",
        folder: "3D Renders"
    },
    {
        url: "G_PROCEDURAL TEXTURES/index.html",
        folder: "Tools"
    },
    {
        url: "WALL DESTRUCTION/index.html",
        folder: "Games"
    },
    {
        url: "RAYMARCHING/index.html",
        folder: "3D Renders"
    },
    {
        url: "triangle thing 3 epic boogalee/index.html",
        folder: "Generative Art"
    },
    {
        url: "trails/index.html",
        folder: "Generative Art"
    },
    {
        url: "light simulation/index.html",
        folder: "Simulations"
    },
    {
        url: "color guesser/index.html",
        folder: "Games"
    },
    {
        url: "inverse kinematics/inverse/index.html",
        folder: "Simulations"
    },
    {
        url: "inverse kinematics/forward/index.html",
        folder: "Simulations"
    },
    {
        url: "cyoobcast background/index.html",
        folder: "Generative Art"
    },
    {
        url: "SHADERS/infinite pattern/index.html",
        folder: "Generative Art"
    },
    {
        url: "SHADERS/wind wave/index.html",
        folder: "Generative Art"
    },
    {
        url: "TETRIS/index.html",
        folder: "Games"
    },
    {
        url: "SHADERS/metaballs/index.html",
        folder: "Generative Art"
    },
    // {
    //     url: "old glitch projects/ascii post processing/index.html",
    //     folder: "Tools"
    // },
    {
        url: "SHADERS/3d glasses/index.html",
        folder: "Simulations"
    },
    {
        url: "SHADERS/edge detect/index.html",
        folder: "Generative Art"
    },
    {
        url: "SHADERS/motion detection shader/index.html",
        folder: "Tools"
    },
    {
        url: "SHADERS/webcam rgb shift/index.html",
        folder: "Generative Art"
    },
    {
        url: "SHADERS/motion blur/index.html",
        folder: "Generative Art"
    },
    {
        url: "triangle thing 2 electric boogaloo/index.html",
        folder: "Generative Art"
    },
    {
        url: "vtuber2/index.html",
        folder: "Tools"
    },
    {
        url: "particle system/index.html",
        folder: "Simulations"
    },
    {
        url: "old glitch projects/discord big text/index.html",
        folder: "Tools"
    },
    {
        url: "old glitch projects/canvas game/index.html",
        folder: "Generative Art"
    },
    {
        url: "smooth noise/index.html",
        folder: "Generative Art"
    },
    {
        url: "SHADERS/blur/index.html",
        folder: "Generative Art"
    },
    {
        url: "SHADERS/mouse gradient/index.html",
        folder: "Generative Art"
    },
    {
        url: "triangle thing/index.html",
        folder: "Generative Art"
    },
    {
        url: "fake word generator/index.html",
        folder: "Tools"
    },
    {
        url: "old glitch projects/website learns to write/index.html",
        folder: "Generative Art"
    },
    {
        url: "sprite system/index.html",
        folder: "Games"
    },
    {
        url: "old glitch projects/bunger nft/index.html",
        folder: "Joke Websites"
    },
    {
        url: "RAYCASTING GAME/versions/4-current/index.html",
        folder: "Games"
    },
    {
        url: "old glitch projects/game engine/index.html",
        folder: "Games"
    },
    {
        url: "old glitch projects/wrm minecraft music/index.html",
        folder: "Tools"
    },
    {
        url: "old glitch projects/wr game/index.html",
        folder: "Games"
    },
    // {
    //     url: "old glitch projects/display filters/index.html",
    //     folder: "Tools"
    // },
    {
        url: "SHADERS/basic gradient/index.html",
        folder: "Generative Art"
    },
    {
        url: "graphing calculator/index.html",
        folder: "Tools"
    },
    {
        url: "old glitch projects/break the cycle/index.html",
        folder: "Joke Websites"
    },
    {
        url: "old glitch projects/biscord/index.html",
        folder: "Joke Websites"
    }
]

for (let p of ProjectList) {
    getInfo("https://o2flash20.github.io/my-random-projects/" + p.url, p.folder)
}

// to add Onix stuff: 1) create an html file with the same name as the lua file   2) add that name to this list
const OnixProjectList = [
    {
        name: "timeSpeed"
    },
    {
        name: "cameraEffects"
    },
    {
        name: "blockToTexture"
    },
    {
        name: "cosmeticTools"
    },
    {
        name: "logger"
    },
    {
        name: "vectors"
    },
    {
        name: "3dView"
    },
    {
        name: "arrowTrail"
    },
    {
        name: "betterHunger"
    },
    {
        name: "blockMap"
    },
    {
        name: "bridgeOverlay"
    },
    {
        name: "cameraAnimations"
    },
    {
        name: "DevBlockLeaker"
    },
    {
        name: "freecam"
    },
    {
        name: "ImmersiveFirstPerson2"
    },
    {
        name: "lagSwitch"
    },
    {
        name: "miniMap"
    },
    {
        name: "PvPHelper"
    },
    {
        name: "quickWaypoints"
    },
    {
        name: "raytracing"
    },
    {
        name: "replayMod"
    },
    // {
    //     name: "replayModOld"
    // },
    {
        name: "winParticles"
    },
    {
        name: "animatedSkin"
    },
    {
        name: "blenderCam"
    }
]

let test = 0
let test1 = 0
for (let project of OnixProjectList) {
    if (!folders["Onix Client Scripts"]) { folders["Onix Client Scripts"] = [new OnixProject("whatIsOnixClient")] }
    folders["Onix Client Scripts"].push(new OnixProject(project.name))
}

/* 
TODO
be able to determine the order of the folders and projects
rating value
"finished" indicator

!FIX TETRIS (why borken)
*/