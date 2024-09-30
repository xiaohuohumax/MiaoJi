import { select } from '@inquirer/prompts'
import awaitTo from 'await-to-js'
import { version } from '../package.json'
import { batchDeleteLabel, createCommonLabel, createFuncLabel, listAllLabels } from './command'
import i18n from './i18n'

function checkNull(value: string | undefined, msg: string) {
  if (!value) {
    throw new Error(msg)
  }
}

function checkEnv() {
  const envs: (keyof ImportMetaEnv)[] = ['VITE_APP_NAME', 'VITE_GITHUB_TOKEN', 'VITE_OWNER', 'VITE_REPO']
  envs.forEach((env) => {
    checkNull(import.meta.env[env], i18n.t('label:envUndefined', { env }))
  })
}

interface Command {
  name: string
  value: string
  action: () => Promise<void>
}

const commands: Command[] = [
  {
    name: i18n.t('label:command.listAllLabels.name'),
    value: 'list-all-label',
    action: listAllLabels,
  },
  {
    name: i18n.t('label:command.createFuncLabel.name'),
    value: 'create-func-label',
    action: createFuncLabel,
  },
  {
    name: i18n.t('label:command.createCommonLabel.name'),
    value: 'create-common-label',
    action: createCommonLabel,
  },
  {
    name: i18n.t('label:command.batchDeleteLabel.name'),
    value: 'batch-delete-label',
    action: batchDeleteLabel,
  },
]

async function start() {
  checkEnv()

  console.log(i18n.t('label:welcome', { env: import.meta.env.VITE_APP_NAME, version }))

  const [err, command] = await awaitTo(select({
    message: i18n.t('label:selectCommand'),
    choices: commands,
  }))
  if (err) {
    console.error(i18n.t('label:cancel'))
    return
  }

  commands.find(c => c.value === command)?.action()
}

start().catch(console.error)
