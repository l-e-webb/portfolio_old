(function() {

    var entryHtml = '<div class="row">\
            <div class="col-md-4 imagecolumn">\
                <img src="images/%img%" class="portfolioimg">\
            </div>\
            <div class="col-md-8" blurbcolumn>\
                <h4>%name%</h4>\
                <p>%description%</p>\
                <h5>Credits</h5>\
                <p>%credits%</p>\
                <p>%links%</p>\
            </div>\
        </div>\
        <hr>'
    var linkHtml = '<a href="%link%" target="_blank">%link text%</a>'

    function displayEntry(entryData) {
        var entry = entryHtml.replace("%name%", entryData.name)
                .replace("%img%", entryData.img)
                .replace("%description%", entryData.description)
                .replace("%credits%", entryData.credits);
        
        var links = "";
        for (var i = 0; i < entryData.links.length; i++) {
            if (i > 0) links += "<br>";
            var linkData = entryData.links[i];
            links += linkHtml.replace("%link text%", linkData[0])
                    .replace("%link%", linkData[1]);
        }
        entry = entry.replace("%links%", links);

        $("#footer1").before(entry);
    }

    var portfolioEntries = [];
    portfolioEntries.push(
    {
        "name": "Dreamquill (Coming Soon!)",
        "img": "dreamquill.png",
        "description": "Dreamquill is an new take on the turn-based RPG genre.  Explore beautiful dreamscapes, fight monsters using innovating spell crafting system, romance your classmates, and more.  This game is currently in prototyping, with a Kickstarter soon to come.",
        "credits": "Concept, design, writing, programming: Louis Webb<br>Featuring art by <a href='http://villian-kucingkecil.deviantart.com/' target='_blank'>KucingKecil</a><br>Made in RPGMaker MV",
        "links": []
    });
    portfolioEntries.push(
    {
        "name": "The Blue Room (Beta)",
        "img": "the_blue_room_project_pic.png",
        "description": "A re-imagining of the classic room-escape adventure game genre, The Blue Room paints a world where the true impediment to escape is the protagonist's own depression and agoraphobia. Explore the vast yet sharply limiting confines of a single room, and join the protagonist as they search for hope, motivation, joy, or just distraction from their depression.  The art features digital collage techniques.  This project is currently in open beta.",
        "credits": 'Concept, design, writing, programming, art: Louis Webb<br>Made with Unity using Tony Coculuzzi\'s <a href="https://www.assetstore.unity3d.com/en/#!/content/14854" target="_blank">Dialoguer</a>',
        "links": [
            ["Download", "https://tangledwebgames.itch.io/the-blue-room"]
        ]
    });
    portfolioEntries.push(
    {
        "name": "Asteroidal Projection (Beta)",
        "img": "asteroidal_projection_project_pic.png",
        "description": "Asteroidal Projection is inspired by the classic arcade game Asteroids, but comes with a twist. The game occurs in the normal Euclidean plane projected radially into the unit disc. An entire infinite 2D space is inside the disc-shaped play area. Sizes and distances are distorted the farther you get from the center, so objects will appear to shrink and go slower as they near the edges of the disc.  This project is currently in open beta and available to play online.",
        "credits": "Concept, design, programming, art: Louis Webb<br>Music: <a href='https://incompetech.com' target='_blank'>Kevin Macleod</a><br>Made with libGDX",
        "links": [
            ["Play", "https://l-e-webb.github.io/asteroidal_projection"],
            ["Source", "https://github.com/l-e-webb/asteroidal_projection"]
        ]
    });
    portfolioEntries.push(
    {
        "name": "Bad Moon (Global Game Jam 2017)",
        "img": "bad_moon_project_pic.png",
        "description": "A bullet h*ck nightmare on an endless night! On a sea-covered world where the moon never leaves the sky, Marten holds out against mechanical invaders dead set on destroying her home with nothing but her trusty laz-blaster and a pair of rocket boots! But everything that rises must fall...  Made during Global Game Jam 2017.",
        "credits": "Concept, Lead programming, enemy AI design: Louis Webb<br>Concept, environment art, additional programming: Jonathan Minnamon<br>Concept, character art, sound design: Aubrey Rose",
        "links": [
            ["Play/download", "https://calamityjive.itch.io/badmoon"]
        ]
    });
    portfolioEntries.push(
    {
        "name": "CrossFade",
        "img": "crossfade_project_pic.png",
        "description": "A simple puzzle game.  Selecting a tile flips the on/off value of all the tiles in that tile's row and column.  Try to turn them all off!  The game is playable in-browser and on Android.  (Not on Google Play Store at the moment, but hopefully soon!)",
        "credits": "Concept, design, programming: Louis Webb<br>Made with libGDX",
        "links": [
            ["Play", "https://l-e-webb.github.io/crossfade"],
            ["Source", "https:github.com/l-e-webb/crossfade"]
        ]
    });
    portfolioEntries.push(
    {
        "name": "Space Kerfuffle!",
        "img": "space_kerfuffle_project_pic.png",
        "description": 'Space Kerfuffle! is a top-down starfighter game.  Blast your way through hoards of enemy ships and destroy the mothership!  This game was created as a sample implementation for students in the <a href="https://udacity.com" target="_blank">Udacity</a> 2D Mobile Game Developer Nanodegree.',
        "credits": 'Concept, design: Louis Webb, Udacity 2D Mobile Game Developer Nanodegree content team<br>Art: <a href="https://github.com/ShengKungYi" target="_blank">Mike Yi</a><br>Programming: Louis Webb<br>Made with libGDX',
        "links": [
            ["Play", "https://l-e-webb.github.io/space_kerfuffle"],
            ["Source", "https://github.com/l-e-webb/space_kerfuffle"]
        ]
    });
    portfolioEntries.push(
    {
        "name": "Outbreak",
        "img": "outbreak_project_pic.png",
        "description": 'Outbreak is a simple cross-platform (browser/desktop/Android) Breakout clone.  It was created as a sample implementation for students in the <a href="https://udacity.com" target="_blank">Udacity</a> 2D Mobile Game Developer Nanodegree.',
        "credits": "Concept, design: Louis Webb, Udacity 2D Mobile Game Developer Nanodegree content team<br>Programming: Louis Webb<br>Made with libGDX",
        "links": [
            ["Play", "https://l-e-webb.github.io/outbreak"],
            ["Source", "https://github.com/l-e-webb/outbreak"]
        ]
    });

    for (var i = 0; i < portfolioEntries.length; i++) {
        displayEntry(portfolioEntries[i]);
    }

})();