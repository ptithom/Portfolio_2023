# Setup d'un nouveau projet

Nous assumons ici que vous avez déjà mis en place votre host à l'aide du dépôt disponible ici : https://git.stafe.fr/docker/host

0. Setup des domaines

Plusieurs ndd sont à mettre en place en ammont :

- Le domaine correpondant à la conf URL_APP (ainsi qu'éventuellement les URL_ALIAS)
- pma.[URL_APP] servant à l'accès a phpmyadmin
- [PREFIX].[MAIN_DOMAIN] servant à la configuration de sendmail (sans ça, les mails partiront en spam)
 - IMPORTANT: le domaine [PREFIX].[MAIN_DOMAIN] DOIT exister dans la zone DNS, et pointer sur le serveur envoyant les emails !

1. Clonage du dépôt LAMP

Remplacez bien sûr *mon-nouveau-projet* par un slug représentant votre projet.

```bash
git clone git@git.stafe.fr:docker/lamp.git ./mon-nouveau-projet
```

2. Configurez votre projet

Copier le fichier de variables d'environnement

```bash
cd mon-nouveau-projet
cp .env.example .env
```

Editez ce fichier puis remplacer les variables suivantes

```bash
vi .env
```

* __APACHE_PHP_IMG__ = Image PHP utilisée pour votre projet
* __PREFIX__ = Slug de votre projet. __/!\ Doit être unique et sans caractères spéciaux /!\\__ ex: mon-projet
* __URL_APP__ = URL de votre projet. Dans le cas d'un dev. local, le pas oublier de l'ajouter dans vote hosts !
* __DB_ROOT_PASSWORD__ = Mot de passe de l'utilisateur root de votre base de données.

## Protection via .htpasswd

Pour fermer l'accès à votre appli. avec un .htpasswd il suffit de dé-commenter la partie "Basic Auth Configuration" du fichier docker-compose.yml

Les accès renseignés dans les variables d'environnement seront alors utilisés. Par défaut : stafe / stafe
