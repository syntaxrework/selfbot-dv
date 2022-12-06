const discord = require('discord.js-selfbot-v13')
const client = new discord.Client({checkUpdate: false})

const consolecolor = require('gradient-string')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  var os = require("os");

  function processInput ( text ) 
  {     
	fs.open('guilds.txt', 'a', 666, function( e, id ) {
	 fs.write( id, text + os.EOL, null, 'utf8', function(){
	  fs.close(id, function(){
	  });
	 });
	});
   }

const q = require('readline-sync')

const config = require('./config')
const token = config.token || process.env.token

if (!token) throw new Error(consolecolor.instagram("Invalid Token !"))

client.login(token).catch(() => {throw new Error(consolecolor.instagram("Invalid Token !"))})



const logo = [`
                        ▄████████  ▄█        ▄█            ▀█████████▄     ▄████████ ███▄▄▄▄   
                        ███    ███ ███       ███              ███    ███   ███    ███ ███▀▀▀██▄ 
                        ███    ███ ███       ███              ███    ███   ███    ███ ███   ███ 
                        ███    ███ ███       ███             ▄███▄▄▄██▀    ███    ███ ███   ███ 
                      ▀███████████ ███       ███            ▀▀███▀▀▀██▄  ▀███████████ ███   ███ 
                        ███    ███ ███       ███              ███    ██▄   ███    ███ ███   ███ 
                        ███    ███ ███▌    ▄ ███▌    ▄        ███    ███   ███    ███ ███   ███ 
                        ███    █▀  █████▄▄██ █████▄▄██      ▄█████████▀    ███    █▀   ▀█   █▀  
                                           ▀         ▀                                                  `,

`
                                 ▄▄▄       ██▓     ██▓        ▄▄▄▄    ▄▄▄       ███▄    █ 
                                ▒████▄    ▓██▒    ▓██▒       ▓█████▄ ▒████▄     ██ ▀█   █ 
                                ▒██  ▀█▄  ▒██░    ▒██░       ▒██▒ ▄██▒██  ▀█▄  ▓██  ▀█ ██▒
                                ░██▄▄▄▄██ ▒██░    ▒██░       ▒██░█▀  ░██▄▄▄▄██ ▓██▒  ▐▌██▒
                                 ▓█   ▓██▒░██████▒░██████▒   ░▓█  ▀█▓ ▓█   ▓██▒▒██░   ▓██░
                                 ▒▒   ▓▒█░░ ▒░▓  ░░ ▒░▓  ░   ░▒▓███▀▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒ 
                                  ▒   ▒▒ ░░ ░ ▒  ░░ ░ ▒  ░   ▒░▒   ░   ▒   ▒▒ ░░ ░░   ░ ▒░
                                  ░   ▒     ░ ░     ░ ░       ░    ░   ░   ▒      ░   ░ ░ 
                                     ░  ░    ░  ░    ░  ░    ░            ░  ░         ░ 
                                                              ░ `,
                                                    `
                                 █████╗ ██╗     ██╗         ██████╗  █████╗ ███╗   ██╗
                                ██╔══██╗██║     ██║         ██╔══██╗██╔══██╗████╗  ██║
                                ███████║██║     ██║         ██████╔╝███████║██╔██╗ ██║
                                ██╔══██║██║     ██║         ██╔══██╗██╔══██║██║╚██╗██║
                                ██║  ██║███████╗███████╗    ██████╔╝██║  ██║██║ ╚████║
                                ╚═╝  ╚═╝╚══════╝╚══════╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝
                                                                                                          
                                                    `]

const heyycv = Math.floor((Math.random() * logo.length));

const sltconsole = logo[heyycv]

let theme = [consolecolor("#f2790f", "#ff0000"), consolecolor("#00fbff", "#002aff"), consolecolor("#ff0000", "#ff00b7"), consolecolor("#00FF00", "#00ffae"),consolecolor("#2b00ff", "#380a52", "#141b33"), consolecolor("#f7ff03", "#9eff03"), consolecolor.instagram, consolecolor.cristal, consolecolor.atlas, consolecolor.mind, consolecolor.retro, consolecolor.fruit]

let cccv = Math.floor((Math.random() * theme.length));

var fs = require('fs');
let spam = fs.readFileSync('message.txt', 'utf-8');


async function main() {
    process.title = `Tool By GL | Connected As ${client.user.username} | Guilds: ${client.guilds.cache.size}`
    let sltcv = theme[cccv]

    console.clear()
	console.log(' ')
	console.log(' ')
    console.log(sltcv(`   
    
    
${sltconsole}



                                                [1] Send message.txt to everyone

                                                [2] Fetch Guilds ID

                                                [3] Exit
												
												`))

    const e = q.question(sltcv("                                                [?] : "))

    if (e === "1"){
        const guildid = q.question(sltcv("                                                [?] What's the guild ID ? : "))

    const guild = client.guilds.cache.get(guildid)
    if (!guild){
        console.log(sltcv("                                                [!] No guild found..."))
        await sleep(2000)
        main()
    }
    await guild.members.fetch().then(() => {
        guild.members.cache.forEach(member => {
			if(member.user.id === client.user.id) return;
			member.send(spam).then(() => { console.log(sltcv('Sent message to: ' + member.user.tag)) }).catch(() => { console.log('Failed to send message to: ' + member.user.tag) })
        })
    })
}
else if (e === "2"){
    fs.truncate('guilds.txt', 0, function(){console.log('done')})
	client.guilds.cache.forEach(guild =>{
		const dados = ("Nome: ") + (guild.name) + ("|  ID: ") + (guild.id) + ("|  Numero de Pessoas: ") + (guild.memberCount);
		console.log(sltcv(dados))
		processInput(dados)
	})

} else if(e === "3"){
	process.exit(1)
}
else{
    console.log(sltcv("                                                [!] Missclick ??"))
    await sleep(1000)
    main()
}
}



client.on('ready', () => main())