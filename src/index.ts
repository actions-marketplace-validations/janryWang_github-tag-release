import { createChangelogFile } from './changelog'
import { createReleaseNote } from './release-note'
import { commit } from './commit'

const runner = async () => {
  try {
    await createChangelogFile()
    console.info('ChangeLog generated success!')
    await createReleaseNote()
    console.info('ReleaseNote generated success!')
    await commit()
    console.info('Git Commit Success!')
  } catch (e) {
    console.error(e)
    throw e
  }
}

runner()
