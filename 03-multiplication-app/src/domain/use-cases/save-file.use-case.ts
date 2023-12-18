import { mkdirSync, writeFileSync } from 'fs'

export interface SaveFileUseCase {
  execute: (options: Options) => boolean
}

export interface Options {
  fileContent: string
  fileDestination?: string
  fileName?: string
}

export class SaveFile implements SaveFileUseCase {
  constructor /** repository:  StorageRepository */() {}

  execute({
    fileContent,
    fileDestination = 'outputs',
    fileName = 'table'
  }: Options): boolean {
    mkdirSync(fileDestination, { recursive: true })

    try {
      writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent)
      console.log('File written successfully')
      return true
    } catch (error) {
      console.error('An error occurred:', error)
      return false
    }
  }
}
