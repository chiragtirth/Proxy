let gamearray = []
let results = []

function loadFlashPoint(searchQuery) {
    fetch(`https://api.codetabs.com/v1/proxy?quest=https://db-api.unstable.life/search?title=${encodeURIComponent(searchQuery)}&platform=flash&fields=id,title`)
        .then(response => response.json())
        .then(resJson => {
            console.log('here')
            console.log(resJson);
            resJson.forEach(game => {
                addGame(game.title, `player.html?${game.id}`, 'flashpoint');
            });
            updateResults();
        })
        .catch(error => console.error('Error fetching data:', error));
}

function loadGithub() {
    document.getElementById('github').setAttribute('disabled', true)
    const repoUrls = [
        'https://api.codetabs.com/v1/proxy?quest=https://raw.githubusercontent.com/sebastian-92/game-assets/main/cachegame.json',
        'https://api.codetabs.com/v1/proxy?quest=https://raw.githubusercontent.com/sebastian-92/game-assets/main/selcache.json',
        'https://api.codetabs.com/v1/proxy?quest=https://raw.githubusercontent.com/Parcoil/nativegames.net-v1/main/nativecache.json'
    ];

    Promise.all(repoUrls.map(repoUrl => {
        return fetch(repoUrl)
            .then(response => response.json())
            .catch(error => {
                console.error('Error fetching data:', error);
                return [];
            });
    })).then(([gameAssetsData, seleniteAssetsData, nativeAssetsData]) => {        
        function addNewLinks(repoData, baseUrl, nameExt) {
            repoData.forEach(item => {
                if (item.type === 'dir') {
                    var href = `https://api.codetabs.com/v1/proxy?quest=${baseUrl}/${item.path}/index.html`;
                    var textContent = item.name.replace(/-/g, " ");
                    pushGame(textContent, href, nameExt);
                }
            });
        }        

        // Add game assets from GitHub repos via Codetabs proxy
        addNewLinks(gameAssetsData, 'https://raw.githubusercontent.com/sebastian-92/game-assets/fixy', '~pegleg/3kh0');
        addNewLinks(seleniteAssetsData, 'https://raw.githubusercontent.com/sebastian-92/selenite1/f648efb8d13961a0042118584248e38d77d2f603', '~selenite');
        addNewLinks(nativeAssetsData, 'https://raw.githubusercontent.com/Parcoil/nativegames.net-v1/ddc2ed3c55332113d036e137db0befa48da98c9b', '~native');
    })
}

function pushGame(title, link, source) {
    gamearray.push({
        title: title,
        link: link,
        source: source
    })
}

function addGame(title, link, source) {
    results.push({
        title: title,
        link: link,
        source: source
    })
}

async function loadSources() {
    var container = document.getElementById('source-boxes');
    var checkBoxesSelected = container.querySelectorAll('input[type="checkbox"]:checked');
    let values = [];
    checkBoxesSelected.forEach((checkbox) => {
        if (!(checkbox.disabled)) {
            values.push(checkbox.value);
            checkbox.setAttribute('disabled', true);
        }
    });

    let fetchPromises = values.map(value =>
        fetch(`https://api.codetabs.com/v1/proxy?quest=${value}`).then(res => res.json())
    );

    let responses = await Promise.all(fetchPromises);
    responses.forEach(resJson => {
        resJson.data.forEach(item => {
            var itemname = item;
            if (resJson.remove) {
                resJson.remove.forEach(item2 => {
                    if (resJson.regex) {
                        var item3 = new RegExp(item2);
                        itemname = itemname.replace(item3, '');
                    } else {
                        itemname = itemname.replace(item2, '');
                    }
                });
            }
            pushGame(decodeURIComponent(itemname), resJson.playerurl + item, resJson.name);
        });
    });
}

function updateResults() {
    var resHTML = '';
    document.getElementById('link-container').innerHTML = resHTML;
    results.forEach(thing => {
        resHTML = resHTML + `<a href="${thing.link}">${thing.title} ~ ${thing.source}</a><br>`;
    });
    document.getElementById('link-container').innerHTML = resHTML;
}

async function doSearch(searchQuery) {
    results = [];
    gamearray.filter(x => x.title.toLowerCase().includes(searchQuery.toLowerCase())).forEach(thingy => {
        addGame(thingy.title, thingy.link, thingy.source);
    });

    if (document.getElementById('flashpoint').checked) {
        loadFlashPoint(searchQuery);
    } else {
        updateResults();
    }
}

function getSources() {
    fetch("https://api.codetabs.com/v1/proxy?quest=data/sources.json")
        .then(res => res.json())
        .then(resJson => {
            for (i = 0; i < resJson.length; i++) {
                document.getElementById("source-boxes").innerHTML += `<input type="checkbox" name="source" onclick="loadSources();" value="https://api.codetabs.com/v1/proxy?quest=${resJson[i]}">  
                <label> ${resJson[i].replace('data/', '').replace('.json', '')}</label>`;
            }
        });
}

getSources();

function clickPress(event) {
    if (event.key == "Enter") {
        doSearch(document.getElementById('search-input').value);
    }
}
