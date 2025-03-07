const mix = require('laravel-mix')
const colors = require('colors')
const fs = require('fs')
const isSymbolicLink = require('is-symbolic-link')
const resolve = require('path').resolve

class SymbolicFolder {
  register (target, path) {

    target = resolve(target)

    if (!fs.existsSync(path)) {
      //We know path doesn't exist. Attempt creating the symbolic link

      try {
        fs.symlinkSync(target, path, 'dir')
        if (fs.statSync(path).isDirectory()) {
          //Success
          console.log(
            `> Symbolic link at '${path}' created successfully`.bold.green)

        } else {
          //Fail
          console.log(
            `> The symbolic link at '${path}' failed to be created correctly`.bold.red)
        }

      } catch (err) {
        //Error
        console.log(
          `> The symbolic link at '${path}' failed to be created correctly \n\n ${err}`.bold.red)
      }

    } else {
      //If the existing file is NOT a symbolic link, alert the user
      if (!isSymbolicLink.sync(path)) {
        console.log(
          `> The symbolic link at '${path}' could not be created. Another file with this name already exists`.bold.red)
      }
      //Else, it's a symbolic link... do nothing

    }
  }
}

class SymbolicFile {
  register (target, path) {

    target = resolve(target)

    if (!fs.existsSync(path)) {
      //We know path doesn't exist. Attempt creating the symbolic link

      try {
        fs.symlinkSync(target, path)
        if (fs.statSync(path).isFile()) {
          //Success
          console.log(
            `> Symbolic link at '${path}' created successfully`.bold.green)

        } else {
          //Fail
          console.log(
            `> The symbolic link at '${path}' failed to be created correctly`.bold.red)
        }

      } catch (err) {
        //Error
        console.log(
          `> The symbolic link at '${path}' failed to be created correctly \n\n ${err}`.bold.red)
      }

    } else {
      //If the existing file is NOT a symbolic link, alert the user
      if (!isSymbolicLink.sync(path)) {
        console.log(
          `> The symbolic link at '${path}' could not be created. Another file with this name already exists`.bold.red)
      }
      //Else, it's a symbolic link... do nothing

    }
  }
}

class UnlinkSymbolicLink {
  register (path) {
    path = resolve(path)

    // check path is symbolic link
    if (isSymbolicLink.sync(path)) {
      try {
        fs.unlinkSync(path)
        console.log(`> Symbolic link at '${path}' deleted successfully`.bold.green)
      } catch (err) {
        //Error
        console.log(`> The symbolic link at '${path}' failed to be deleted correctly \n\n ${err}`.bold.red)
      }
    } else {
      console.log(`> '${path}' is not symbolic link`.bold.red)
    }
  }
}

mix.extend('createSymbolicFolder', new SymbolicFolder())
mix.extend('createSymbolicFile', new SymbolicFile())
mix.extend('unlinkSymbolicLink', new UnlinkSymbolicLink())
