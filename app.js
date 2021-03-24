const fs = require('fs');
const {readdir} = require('fs');

// Premier paramètre le fichier que l'on veut ouvrir
// deuxieme parametre un flag, en fonction de celui qu'on choisi, cela nous donne une permission sur le fichier
// https://nodejs.org/api/fs.html#fs_file_system_flags flag disponible
// Le troisieme parametre est une fonction avec en parametre, l'erreur puis FD, sa signifie file descriptor, avec ce FD on peut intéragir avec d'autres méthodes.
// fs close permet de supprimer l'identifiant pour le laisser a nouveau libre.

// Ouvrir un fichier
// fs.open('test.js', 'a+', (err, fd) => {
//     if(err) throw err;
//     console.log(fd)
//     fs.close(fd, (err) => {});
// })

// Réplique de la commande Mkdir
// fs.mkdir('test', {recursive : false}, (err) => {
//     if(err) throw err;
// })


const creerDossier = process.argv[2];

if(creerDossier !== "ls" && creerDossier !=="lire") {
    fs.mkdir(creerDossier, {recursive : false}, (err) => {
        if(err) throw err;
    })
}

const ls = process.argv[2];

if(ls === "ls") {
    readdir('.', (error, files) => console.log(files));
}

const lire = process.argv[2];

const lireFichier = (fichier) => {
  if(lire === "lire") {
    fs.readFile(fichier, 'utf8', function(err, data) {
      const content = data;
      console.log(content);
    });
  }
}

lireFichier("index.txt")

