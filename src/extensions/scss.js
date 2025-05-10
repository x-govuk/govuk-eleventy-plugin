import path from 'node:path'

import * as sass from 'sass'

export const scssExtension = {
  outputFileExtension: 'css',

  compile: function (inputContent, inputPath) {
    const parsed = path.parse(inputPath)

    if (parsed.name.startsWith('_')) {
      return
    }

    const result = sass.compileString(inputContent, {
      importers: [new sass.NodePackageImporter()],
      loadPaths: [parsed.dir, this.config.dir.includes, './node_modules', '.'],
      quietDeps: true,
      style: 'compressed'
    })

    return () => {
      return result.css
    }
  }
}
