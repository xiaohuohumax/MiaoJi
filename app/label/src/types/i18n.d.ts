declare global {
  interface I18nSchema {
    meta: {
      name: string
      description: string
    }
    welcome: string
    selectCommand: string
    cancel: string
    envUndefined: string
    command: {
      batchDeleteLabel: {
        name: string
        selectAllError: string
        nothingDeleted: string
        selectLabelMessage: string
        noLabelSelected: string
        confirmDeleteMessage: string
        startDeleting: string
        deleteSuccess: string
        deleteFailure: string
        deleteFinish: string
      }
      createCommonLabel: {
        name: string
        inputLabelName: string
        inputEmptyError: string
        labelExistsOverwriteConfirm: string
        inputLabelDescription: string
        inputLabelColor: string
        inputColorError: string
        confirmCreateLabel: string
        update: string
        create: string
        success: string
        failure: string
      }
      createFuncLabel: {
        name: string
        selectLabelMessage: string
        noLabelSelected: string
        confirmCreateMessage: string
        startCreate: string
        createSuccess: string
        createFailure: string
        createFinish: string
      }
      listAllLabels: {
        name: string
        selectError: string
        labelList: string
      }
    }
    labelGroup: {
      func: {
        name: string
        labels: {
          article: {
            name: string
            description: string
          }
          message: {
            name: string
            description: string
          }
          link: {
            name: string
            description: string
          }
          history: {
            name: string
            description: string
          }
          album: {
            name: string
            description: string
          }
          about: {
            name: string
            description: string
          }
          banner: {
            name: string
            description: string
          }
        }
      }
      historyExtra: {
        name: string
        labels: {
          warn: {
            name: string
            description: string
          }
          success: {
            name: string
            description: string
          }
          info: {
            name: string
            description: string
          }
          error: {
            name: string
            description: string
          }
          default: {
            name: string
            description: string
          }
        }
      }
      util: {
        name: string
        labels: {
          hiddenComment: {
            name: string
            description: string
          }
        }
      }
    }
    api: {
      error: {
        network: string
        unauthorized: string
        rateLimit: string
        forbidden: string
        invalidParams: string
      }
    }
  }
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'label'
    resources: {
      label: I18nSchema
    }
  }
}

export { }
