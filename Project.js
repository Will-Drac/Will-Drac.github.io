class Project {
    constructor(document, url, rating) {
        if (document.head.querySelector("title")) {
            this.title = document.head.querySelector("title").innerHTML
        }
        else {
            this.title = "No Title"
        }
        this.url = "https://will-drac.github.io/my-random-projects/" + url
        for (let meta of document.head.querySelectorAll("meta")) {
            if (meta.name == "description") {
                this.description = meta.content
                break
            }
            this.description = "No Description"
        }

        this.githubURL = "https://github.com/will-drac/my-random-projects/tree/main/" + url
        this.rating = rating
    }
}

class OnixProject {
    constructor(name, isLib, rating) {
        this.url = "Onix Scripts/pages/" + name + ".html"
        this.rating = rating

        getInfoCalls++
        fetch(this.url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch HTML file: ${response.status} ${response.statusText}`)
                }
                return response.text()
            })
            .then(htmlContent => {
                const parser = new DOMParser()
                const doc = parser.parseFromString(htmlContent, 'text/html')

                if (doc.head.querySelector("title")) {
                    this.title = doc.head.querySelector("title").innerHTML
                }
                else {
                    this.title = "No Title"
                }

                for (let meta of doc.head.querySelectorAll("meta")) {
                    if (meta.name == "description") {
                        this.description = meta.content
                    }
                    else {
                        this.description = "No Description"
                    }
                }

                getInfoResponses++
                if (getInfoCalls == getInfoResponses) { loadProjectsSide() }
            })

        if (name == "whatIsOnixClient") { return } //the what is onix one doesnt have code

        if (isLib) {
            this.githubURL = "https://github.com/will-drac/My-Onix-Client-Scripts-Folder/blob/main/Libs/" + name + ".lua"
        } else {
            this.githubURL = "https://github.com/will-drac/My-Onix-Client-Scripts-Folder/blob/main/Modules/" + name + ".lua"
        }
    }
}