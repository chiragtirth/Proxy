let entry = null;
let gameZip = null;

const oooo = 'https://api.codetabs.com/v1/proxy/?quest=https://ooooooooo.ooo';
const zipURL = new URL('https://api.codetabs.com/v1/proxy/?quest=https://download.unstable.life/gib-roms/Games/');
const legacyURL = new URL('https://api.codetabs.com/v1/proxy/?quest=https://infinity.unstable.life/Flashpoint/Legacy/htdocs/');

// Create copy of unmodified fetch method
const _fetch = window.fetch;

// Automatically convert URL objects to their redirected equivalents
const redirect = async request => {
    let url = {
        original: new URL([location.origin, zipURL.origin, legacyURL.origin].some(origin => origin == request.origin) ? request.pathname.substring(1) : request.href, entry.launchCommand),
        redirect: ''
    };
    
    if (gameZip != null) {
        const cleanUrl = decodeURIComponent('content/' + url.original.hostname + url.original.pathname).toLowerCase();
        const entry = Object.entries(gameZip.files).find(entry => entry[0] === cleanUrl);
        if (entry) {
            const file = entry[1];
            if (file && !file.dir) {
                url.redirect = URL.createObjectURL(await file.async('blob'));
                return url;
            }
        }
    }
    
    url.redirect = legacyURL.href + url.original.hostname + url.original.pathname;
    return url;
};

// Player attributes and initialization methods remain unchanged

// Build API request
let request = oooo + '/get';
if (location.search != '')
    request += '?id=' + location.search.substring(1);
else if (localStorage.getItem('filter') != 'false')
    request += '?filter=true';

// Fetch API request
fetch(request).then(async response => {
    try {
        entry = await response.json();
    } catch {
        document.querySelector('.header').textContent = 'The specified entry is invalid.';
        document.querySelectorAll('.content *:not(.header)').forEach(elem => elem.style.display = 'none');
        return;
    }
    
    document.title = entry.title + ' - 9o3o';
    document.querySelector('.header').textContent = entry.title;
    
    let toggle = document.querySelector('.toggle input');
    if (localStorage.getItem('filter') == 'false') toggle.checked = false;
    toggle.addEventListener('change', e => {
        localStorage.setItem('filter', e.target.checked.toString());
    });
    
    document.querySelector('.info').href = 'https://flashpointproject.github.io/flashpoint-database/search/#' + entry.uuid;
    document.querySelector('.link').href = './?' + entry.uuid;
    
    let total = entry.votesWorking + entry.votesBroken;
    if (total > 0) {
        document.querySelector('.fraction').textContent = (Math.round((entry.votesWorking / total) * 100) / 10) + '/10';
        document.querySelector('.total').textContent = total;
    }
    
    document.querySelectorAll('.button').forEach(elem => elem.addEventListener('click', () => {
        document.querySelector('.vote').textContent = 'Thank you.';
        _fetch(`${oooo}/${elem.classList[1]}?id=${entry.uuid}`, { method: 'POST' });
    }));
    
    let p = Math.max(0, (launchPath =>
        players.findIndex(player => player.extensions.some(ext => launchPath.toLowerCase().endsWith(ext)))
    )(new URL(entry.launchCommand).pathname));
    
    if (players[p].override)
        prepareEntry();
    else {
        let script = document.createElement('script');
        script.src = players[p].source;
        script.addEventListener('load', prepareEntry);
        document.head.append(script);
    }
    
    async function prepareEntry() {
        if (entry.isZipped) {
            try {
                gameZip = await new JSZip().loadAsync(await fetch(new URL(`${zipURL.toString()}${entry.uuid}-${entry.utcMilli}.zip`)).then(r => r.blob()));
            } catch {
                let player = document.querySelector('.player');
                player.style.fontSize = '12px';
                player.style.padding = '16px 0 20px';
                player.textContent = 'Failed to load entry. This is not an emulator issue.';
                return;
            }
        }
        
        players[p].initialize();
    }
});
