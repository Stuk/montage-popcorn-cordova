# [Popcorn](https://github.com/montagejs/popcorn) packaged as a Cordova Android app

This project should open and build in the Android SDK.

## Development

The popcorn source is stored in [assets/popcorn](assets/popcorn). First install the dependencies by running `npm install`. Then build it using [Mop](https://github.com/montagejs/mop) and copy the result to [assets/www](assets/www). Finally you can build the project using the Android SDK.

### Updating Popcorn

Popcorn as been added as a subtree, and so you will need `git subtree` to update it. Run the following commands:

```bash
$ git remote add popcorn git@github.com:montagejs/popcorn.git
$ git fetch popcorn
$ git subtree pull --squash --prefix=assets/popcorn popcorn master
```
