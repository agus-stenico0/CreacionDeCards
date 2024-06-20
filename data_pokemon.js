const pokemons = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F001%2FBulbasaur.webp?alt=media",
        "type": "Planta"
    },
    {
        "id": 2,
        "name": "Ivysaur",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F002%2FIvysaur.webp?alt=media",
        "type": "Planta"
    },
    {
        "id": 3,
        "name": "Venusaur",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F003%2FVenusaur.webp?alt=media",
        "type": "Planta"
    },
    {
        "id": 4,
        "name": "Charmander",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F004%2FCharmander.webp?alt=media",
        "type": "Fuego"
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F005%2FCharmeleon.webp?alt=media",
        "type": "Fuego"
    },
    {
        "id": 6,
        "name": "Charizard",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F006%2FCharizard.webp?alt=media",
        "type": "Fuego"
    },
    {
        "id": 7,
        "name": "Squirtle",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F007%2FSquirtle.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 8,
        "name": "Wartortle",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F008%2FWartortle.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 9,
        "name": "Blastoise",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F009%2FBlastoise.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 10,
        "name": "Caterpie",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F010%2FCaterpie.webp?alt=media",
        "type": "Bicho"
    },
    {
        "id": 11,
        "name": "Metapod",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F011%2FMetapod.webp?alt=media",
        "type": "Bicho"
    },
    {
        "id": 12,
        "name": "Butterfree",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F012%2FButterfree.webp?alt=media",
        "type": "Bicho"
    },
    {
        "id": 13,
        "name": "Weedle",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F013%2FWeedle.webp?alt=media",
        "type": "Bicho"
    },
    {
        "id": 14,
        "name": "Kakuna",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F014%2FKakuna.webp?alt=media",
        "type": "Bicho"
    },
    {
        "id": 15,
        "name": "Beedrill",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F015%2FBeedrill.webp?alt=media",
        "type": "Bicho"
    },
    {
        "id": 16,
        "name": "Pidgey",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F016%2FPidgey.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 17,
        "name": "Pidgeotto",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F017%2FPidgeotto.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 18,
        "name": "Pidgeot",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F018%2FPidgeot.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 19,
        "name": "Rattata",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F019%2FRattata.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 20,
        "name": "Raticate",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F020%2FRaticate.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 21,
        "name": "Spearow",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F021%2FSpearow.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 22,
        "name": "Fearow",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F022%2FFearow.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 23,
        "name": "Ekans",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F023%2FEkans.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 24,
        "name": "Arbok",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F024%2FArbok.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 25,
        "name": "Pikachu",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F025%2FPikachu.webp?alt=media",
        "type": "Eléctrico"
    },
    {
        "id": 26,
        "name": "Raichu",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F026%2FRaichu.webp?alt=media",
        "type": "Eléctrico"
    },
    {
        "id": 27,
        "name": "Sandshrew",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F027%2FSandshrew.webp?alt=media",
        "type": "Tierra"
    },
    {
        "id": 28,
        "name": "Sandslash",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F028%2FSandslash.webp?alt=media",
        "type": "Tierra"
    },
    {
        "id": 29,
        "name": "Nidoran♀",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F029%2FNidoran%253F.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 30,
        "name": "Nidorina",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F030%2FNidorina.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 31,
        "name": "Nidoqueen",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F031%2FNidoqueen.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 32,
        "name": "Nidoran ♂",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F032%2FNidoran%253F.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 33,
        "name": "Nidorino",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F033%2FNidorino.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 34,
        "name": "Nidoking",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F034%2FNidoking.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 35,
        "name": "Clefairy",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F035%2FClefairy.webp?alt=media",
        "type": "Hada"
    },
    {
        "id": 36,
        "name": "Clefable",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F036%2FClefable.webp?alt=media",
        "type": "Hada"
    },
    {
        "id": 37,
        "name": "Vulpix",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F037%2FVulpix.webp?alt=media",
        "type": "Fuego"
    },
    {
        "id": 38,
        "name": "Ninetales",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F038%2FNinetales.webp?alt=media",
        "type": "Fuego"
    },
    {
        "id": 39,
        "name": "Jigglypuff",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F039%2FJigglypuff.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 40,
        "name": "Wigglytuff",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F040%2FWigglytuff.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 41,
        "name": "Zubat",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F041%2FZubat.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 42,
        "name": "Golbat",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F042%2FGolbat.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 43,
        "name": "Oddish",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F043%2FOddish.webp?alt=media",
        "type": "Planta"
    },
    {
        "id": 44,
        "name": "Gloom",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F044%2FGloom.webp?alt=media",
        "type": "Planta"
    },
    {
        "id": 45,
        "name": "Vileplume",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F045%2FVileplume.webp?alt=media",
        "type": "Planta"
    },
    {
        "id": 46,
        "name": "Paras",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F046%2FParas.webp?alt=media",
        "type": "Bicho"
    },
    {
        "id": 47,
        "name": "Parasect",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F047%2FParasect.webp?alt=media",
        "type": "Bicho"
    },
    {
        "id": 48,
        "name": "Venonat",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F048%2FVenonat.webp?alt=media",
        "type": "Bicho"
    },
    {
        "id": 49,
        "name": "Venomoth",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F049%2FVenomoth.webp?alt=media",
        "type": "Bicho"
    },
    {
        "id": 50,
        "name": "Diglett",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F050%2FDiglett.webp?alt=media",
        "type": "Tierra"
    },
    {
        "id": 51,
        "name": "Dugtrio",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F051%2FDugtrio.webp?alt=media",
        "type": "Tierra"
    },
    {
        "id": 52,
        "name": "Meowth",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F052%2FMeowth.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 53,
        "name": "Persian",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F053%2FPersian.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 54,
        "name": "Psyduck",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F054%2FPsyduck.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 55,
        "name": "Golduck",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F055%2FGolduck.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 56,
        "name": "Mankey",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F056%2FMankey.webp?alt=media",
        "type": "Lucha"
    },
    {
        "id": 57,
        "name": "Primeape",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F057%2FPrimeape.webp?alt=media",
        "type": "Lucha"
    },
    {
        "id": 58,
        "name": "Growlithe",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F058%2FGrowlithe.webp?alt=media",
        "type": "Fuego"
    },
    {
        "id": 59,
        "name": "Arcanine",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F059%2FArcanine.webp?alt=media",
        "type": "Fuego"
    },
    {
        "id": 60,
        "name": "Poliwag",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F060%2FPoliwag.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 61,
        "name": "Poliwhirl",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F061%2FPoliwhirl.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 62,
        "name": "Poliwrath",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F062%2FPoliwrath.webp?alt=media",
        "type": ["Agua", "Lucha"]
    },
    {
        "id": 63,
        "name": "Abra",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F063%2FAbra.webp?alt=media",
        "type": "Psíquico"
    },
    {
        "id": 64,
        "name": "Kadabra",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F064%2FKadabra.webp?alt=media",
        "type": "Psíquico"
    },
    {
        "id": 65,
        "name": "Alakazam",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F065%2FAlakazam.webp?alt=media",
        "type": "Psíquico"
    },
    {
        "id": 66,
        "name": "Machop",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F066%2FMachop.webp?alt=media",
        "type": "Lucha"
    },
    {
        "id": 67,
        "name": "Machoke",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F067%2FMachoke.webp?alt=media",
        "type": "Lucha"
    },
    {
        "id": 68,
        "name": "Machamp",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F068%2FMachamp.webp?alt=media",
        "type": "Lucha"
    },
    {
        "id": 69,
        "name": "Bellsprout",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F069%2FBellsprout.webp?alt=media",
        "type": ["Planta", "Veneno"]
    },
    {
        "id": 70,
        "name": "Weepinbell",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F070%2FWeepinbell.webp?alt=media",
        "type": ["Planta", "Veneno"]
    },
    {
        "id": 71,
        "name": "Victreebel",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F071%2FVictreebel.webp?alt=media",
        "type": ["Planta", "Veneno"]
    },
    {
        "id": 72,
        "name": "Tentacool",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F072%2FTentacool.webp?alt=media",
        "type": ["Agua", "Veneno"]
    },
    {
        "id": 73,
        "name": "Tentacruel",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F073%2FTentacruel.webp?alt=media",
        "type": ["Agua", "Veneno"]
    },
    {
        "id": 74,
        "name": "Geodude",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F074%2FGeodude.webp?alt=media",
        "type": ["Roca", "Tierra"]
    },
    {
        "id": 75,
        "name": "Graveler",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F075%2FGraveler.webp?alt=media",
        "type": ["Roca", "Tierra"]
    },
    {
        "id": 76,
        "name": "Golem",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F076%2FGolem.webp?alt=media",
        "type": ["Roca", "Tierra"]
    },
    {
        "id": 77,
        "name": "Ponyta",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F077%2FPonyta.webp?alt=media",
        "type": "Fuego"
    },
    {
        "id": 78,
        "name": "Rapidash",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F078%2FRapidash.webp?alt=media",
        "type": "Fuego"
    },
    {
        "id": 79,
        "name": "Slowpoke",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F079%2FSlowpoke.webp?alt=media",
        "type": ["Agua", "Psíquico"]
    },
    {
        "id": 80,
        "name": "Slowbro",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F080%2FSlowbro.webp?alt=media",
        "type": ["Agua", "Psíquico"]
    },
    {
        "id": 81,
        "name": "Magnemite",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F081%2FMagnemite.webp?alt=media",
        "type": ["Eléctrico", "Acero"]
    },
    {
        "id": 82,
        "name": "Magneton",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F082%2FMagneton.webp?alt=media",
        "type": ["Eléctrico", "Acero"]
    },
    {
        "id": 83,
        "name": "Farfetch'd",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F083%2FFarfetch%2527d.webp?alt=media",
        "type": ["Normal", "Volador"]
    },
    {
        "id": 84,
        "name": "Doduo",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F084%2FDoduo.webp?alt=media",
        "type": ["Normal", "Volador"]
    },
    {
        "id": 85,
        "name": "Dodrio",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F085%2FDodrio.webp?alt=media",
        "type": ["Normal", "Volador"]
    },
    {
        "id": 86,
        "name": "Seel",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F086%2FSeel.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 87,
        "name": "Dewgong",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F087%2FDewgong.webp?alt=media",
        "type": ["Agua", "Hielo"]
    },
    {
        "id": 88,
        "name": "Grimer",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F088%2FGrimer.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 89,
        "name": "Muk",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F089%2FMuk.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 90,
        "name": "Shellder",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F090%2FShellder.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 91,
        "name": "Cloyster",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F091%2FCloyster.webp?alt=media",
        "type": ["Agua", "Hielo"]
    },
    {
        "id": 92,
        "name": "Gastly",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F092%2FGastly.webp?alt=media",
        "type": ["Fantasma", "Veneno"]
    },
    {
        "id": 93,
        "name": "Haunter",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F093%2FHaunter.webp?alt=media",
        "type": ["Fantasma", "Veneno"]
    },
    {
        "id": 94,
        "name": "Gengar",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F094%2FGengar.webp?alt=media",
        "type": ["Fantasma", "Veneno"]
    },
    {
        "id": 95,
        "name": "Onix",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F095%2FOnix.webp?alt=media",
        "type": ["Roca", "Tierra"]
    },
    {
        "id": 96,
        "name": "Drowzee",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F096%2FDrowzee.webp?alt=media",
        "type": "Psíquico"
    },
    {
        "id": 97,
        "name": "Hypno",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F097%2FHypno.webp?alt=media",
        "type": "Psíquico"
    },
    {
        "id": 98,
        "name": "Krabby",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F098%2FKrabby.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 99,
        "name": "Kingler",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F099%2FKingler.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 100,
        "name": "Voltorb",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F100%2FVoltorb.webp?alt=media",
        "type": "Eléctrico"
    },
    {
        "id": 101,
        "name": "Electrode",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F101%2FElectrode.webp?alt=media",
        "type": "Eléctrico"
    },
    {
        "id": 102,
        "name": "Exeggcute",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F102%2FExeggcute.webp?alt=media",
        "type": ["Planta", "Psíquico"]
    },
    {
        "id": 103,
        "name": "Exeggutor",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F103%2FExeggutor.webp?alt=media",
        "type": ["Planta", "Psíquico"]
    },
    {
        "id": 104,
        "name": "Cubone",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F104%2FCubone.webp?alt=media",
        "type": "Tierra"
    },
    {
        "id": 105,
        "name": "Marowak",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F105%2FMarowak.webp?alt=media",
        "type": "Tierra"
    },
    {
        "id": 106,
        "name": "Hitmonlee",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F106%2FHitmonlee.webp?alt=media",
        "type": "Lucha"
    },
    {
        "id": 107,
        "name": "Hitmonchan",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F107%2FHitmonchan.webp?alt=media",
        "type": "Lucha"
    },
    {
        "id": 108,
        "name": "Lickitung",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F108%2FLickitung.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 109,
        "name": "Koffing",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F109%2FKoffing.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 110,
        "name": "Weezing",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F110%2FWeezing.webp?alt=media",
        "type": "Veneno"
    },
    {
        "id": 111,
        "name": "Rhyhorn",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F111%2FRhyhorn.webp?alt=media",
        "type": ["Tierra", "Roca"]
    },
    {
        "id": 112,
        "name": "Rhydon",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F112%2FRhydon.webp?alt=media",
        "type": ["Tierra", "Roca"]
    },
    {
        "id": 113,
        "name": "Chansey",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F113%2FChansey.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 114,
        "name": "Tangela",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F114%2FTangela.webp?alt=media",
        "type": "Planta"
    },
    {
        "id": 115,
        "name": "Kangaskhan",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F115%2FKangaskhan.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 116,
        "name": "Horsea",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F116%2FHorsea.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 117,
        "name": "Seadra",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F117%2FSeadra.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 118,
        "name": "Goldeen",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F118%2FGoldeen.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 119,
        "name": "Seaking",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F119%2FSeaking.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 120,
        "name": "Staryu",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F120%2FStaryu.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 121,
        "name": "Starmie",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F121%2FStarmie.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 122,
        "name": "Mr. Mime",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F122%2FMr._Mime.webp?alt=media",
        "type": "Psíquico"
    },
    {
        "id": 123,
        "name": "Scyther",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F123%2FScyther.webp?alt=media",
        "type": "Bicho"
    },
    {
        "id": 124,
        "name": "Jynx",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F124%2FJynx.webp?alt=media",
        "type": "Hielo"
    },
    {
        "id": 125,
        "name": "Electabuzz",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F125%2FElectabuzz.webp?alt=media",
        "type": "Eléctrico"
    },
    {
        "id": 126,
        "name": "Magmar",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F126%2FMagmar.webp?alt=media",
        "type": "Fuego"
    },
    {
        "id": 127,
        "name": "Pinsir",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F127%2FPinsir.webp?alt=media",
        "type": "Bicho"
    },
    {
        "id": 128,
        "name": "Tauros",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F128%2FTauros.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 129,
        "name": "Magikarp",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F129%2FMagikarp.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 130,
        "name": "Gyarados",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F130%2FGyarados.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 131,
        "name": "Lapras",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F131%2FLapras.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 132,
        "name": "Ditto",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F132%2FDitto.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 133,
        "name": "Eevee",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F133%2FEevee.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 134,
        "name": "Vaporeon",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F134%2FVaporeon.webp?alt=media",
        "type": "Agua"
    },
    {
        "id": 135,
        "name": "Jolteon",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F135%2FJolteon.webp?alt=media",
        "type": "Eléctrico"
    },
    {
        "id": 136,
        "name": "Flareon",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F136%2FFlareon.webp?alt=media",
        "type": "Fuego"
    },
    {
        "id": 137,
        "name": "Porygon",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F137%2FPorygon.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 138,
        "name": "Omanyte",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F138%2FOmanyte.webp?alt=media",
        "type": "Roca"
    },
    {
        "id": 139,
        "name": "Omastar",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F139%2FOmastar.webp?alt=media",
        "type": "Roca"
    },
    {
        "id": 140,
        "name": "Kabuto",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F140%2FKabuto.webp?alt=media",
        "type": "Roca"
    },
    {
        "id": 141,
        "name": "Kabutops",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F141%2FKabutops.webp?alt=media",
        "type": "Roca"
    },
    {
        "id": 142,
        "name": "Aerodactyl",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F142%2FAerodactyl.webp?alt=media",
        "type": "Roca"
    },
    {
        "id": 143,
        "name": "Snorlax",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F143%2FSnorlax.webp?alt=media",
        "type": "Normal"
    },
    {
        "id": 144,
        "name": "Articuno",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F144%2FArticuno.webp?alt=media",
        "type": "Hielo"
    },
    {
        "id": 145,
        "name": "Zapdos",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F145%2FZapdos.webp?alt=media",
        "type": "Eléctrico"
    },
    {
        "id": 146,
        "name": "Moltres",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F146%2FMoltres.webp?alt=media",
        "type": "Fuego"
    },
    {
        "id": 147,
        "name": "Dratini",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F147%2FDratini.webp?alt=media",
        "type": "Dragón"
    },
    {
        "id": 148,
        "name": "Dragonair",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F148%2FDragonair.webp?alt=media",
        "type": "Dragón"
    },
    {
        "id": 149,
        "name": "Dragonite",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F149%2FDragonite.webp?alt=media",
        "type": ["Dragón", "Volador"]
    },
    {
        "id": 150,
        "name": "Mewtwo",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F150%2FMewtwo.webp?alt=media",
        "type": "Psíquico"
    },
    {
        "id": 151,
        "name": "Mew",
        "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-3994c.appspot.com/o/pokemons%2Fcarpetas%2F151%2FMew.webp?alt=media",
        "type": "Psíquico"
    }

]
