const redirect = (name) => {
    console.log(name.classList);
    switch (name.classList[1]) {
        case "envelope":
            console.log("envelope");
            window.location.href = "mailto:acmahaja@gmail.com";

            break;
        case "linkedin":
            window.location.href = "https://www.linkedin.com/in/acmahaja/";
            break;
        case "github":
            window.location.href = "https://github.com/acmahaja";
            break;
        case "discord":
            window.location.href = "https://discordapp.com/users/209521176303763467/";
            break;
        case "instagram":
            window.location.href = "https://www.instagram.com/acmahaja/";
            break;
        case "twitch":
            window.location.href = "https://www.twitch.tv/acmahaja";
            break;
        default:
            break;
    }

}

window.addEventListener('resize', () => {
    if (self.innerWidth > 729) {
        console.log(window.innerWidth);
        document.querySelector('.bio').hidden = false;
    } else {
        document.querySelector('.bio').hidden = true;
    }
})

if (self.innerWidth > 729) {
    console.log(window.innerWidth);
    document.querySelector('.bio').hidden = false;
} else {
    document.querySelector('.bio').hidden = true;
}

window.addEventListener('resize', () => {
    if (self.innerWidth > 1000) {
        console.log(window.innerWidth);
        document.querySelector('.dropdown').hidden = false;
    } else {
        document.querySelector('.dropdown').hidden = true;
    }
})

if (self.innerWidth > 1000) {
    console.log(window.innerWidth);
    document.querySelector('.dropdown').hidden = false;
} else {
    document.querySelector('.dropdown').hidden = true;
}

// self.addEventListener('')