## POC FFT Refonte du Front-Office de Billetterie [![Build Status](https://travis-ci.org/AgileSpirit/poc-fft-billetterie.svg?branch=master)](https://travis-ci.org/AgileSpirit/poc-fft-billetterie) 

[![Join the chat at https://gitter.im/AgileSpirit/poc-fft-billetterie](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/AgileSpirit/poc-fft-billetterie?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### Installation de la station de développement

1/ Installer le JDK 8

2/ Installer Typesafe Activator

```
$ brew install typesafe-activator
```

3/ Récupérer le code source

```
$ cd ~/Works
$ git clone git@github.com:AgileSpirit/poc-fft-billetterie.git
```

4/ Lancer l'application

```
$ cd ~/Works/poc-fft-billetterie
$ activator run
```

5/ Prendre un café & faire une partie de baby-foot

6/ Vérifier que l'application tourne

Dans un navigateur, accéder à l'URL http://localhost:9000

7/ Installer le plugin Scala pour Intellij IDEA


### Déployer sur Heroku

TODO

---


## Starter for Play with Java projects 

This is a blank [Play framework](http://www.playframework.com) project that will connect to any [prismic.io](https://prismic.io) repository. It uses the prismic.io Java developement kit, and provide a few helpers to integrate with the Play framework.

### How to start?

Edit the `conf/application.conf` file to make the application point to the correct repository:

```
# Prismic.io
# ~~~~~

# API endpoint
prismic.api="https://lesbonneschoses.prismic.io/api"

# If specified this token is used for all "guest" requests
# prismic.token="xxx"

# OAuth2 configuration
# prismic.clientId="xxxxxx"
# prismic.clientSecret="xxxxxx"
```

Run your play application using either the `play run` or the `sbt run` command and open your browser at http://localhost:9000/

### Licence

This software is licensed under the Apache 2 license, quoted below.

Copyright 2013 Zengularity (http://www.zengularity.com).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.