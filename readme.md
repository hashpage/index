# HashPage Index

This is the collaborative space for [HashPage](http://hashpage.com) developers. 

## How does it work?

We automatically bake skins and widgets in this repository and publish them on live [hashpage.com](http://hashpage.com) to be available to users.

## Structure

Just look around. It should be self-explanatory.

Skins and widgets have following directory structure:

    /skins/<author>/<name>/<version>/**
    /skins/<author>/<name>/readme.md
    /skins/<author>/<name>/meta.yaml

Default and required version is "master". Other versions are optional. File meta.yaml contains meta data about widget or skin. Use your github username in place of author (it is easier for us to track).

## How can I add my asset into index?

1. fork index repository
2. add your author and widget/skin directory
3. hack!
4. send pull request to [user "hashpage" on GitHub](http://github.com/hashpage) on GitHub

## How are the assets deployed on hashpage.com ?

Every time we run deploy script, all assets are baked for production and uploaded to HashPage server. You can see current index version in top-right corner in HashPage editor.

You can browse current production state here:

* [http://widgets.hashpage.com](http://widgets.hashpage.com)
* [http://skins.hashpage.com](http://skins.hashpage.com)