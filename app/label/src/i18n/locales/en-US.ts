const lng: I18nSchema = {
  meta: {
    name: 'en-US',
    description: 'English',
  },
  welcome: 'Welcome to use: {{env}}-v{{version}}',
  selectCommand: 'Please select a command',
  envUndefined: 'Environment variable {{env}} is undefined',
  cancel: 'Cancel operation',
  command: {
    batchDeleteLabel: {
      name: 'Batch Delete Labels',
      selectAllError: 'Failed to get labels',
      nothingDeleted: 'No labels to delete',
      selectLabelMessage: 'Please select the labels to delete',
      noLabelSelected: 'No labels selected',
      confirmDeleteMessage: 'Selected [{{length}}] labels, do you want to start deleting?',
      startDeleting: 'Start deleting labels',
      deleteSuccess: 'Successfully deleted label [{{name}}]',
      deleteFailure: 'Failed to delete label [{{name}}]',
      deleteFinish: 'Label deletion completed',
    },
    createCommonLabel: {
      name: 'Create Common Label',
      inputLabelName: 'Please enter the label name',
      inputEmptyError: 'Label name cannot be empty',
      labelExistsOverwriteConfirm: 'Label [{{name}}] already exists, do you want to overwrite?',
      inputLabelDescription: 'Please enter the label description',
      inputLabelColor: 'Please enter the label color (6-digit hex code)',
      inputColorError: 'Label color format error',
      confirmCreateLabel: 'Label name: [{{name}}], description: [{{description}}], color: [{{color}}], do you want to start creating?',
      update: 'Update',
      create: 'Create',
      success: '[{{name}}] successful',
      failure: '[{{name}}] failed',
    },
    createFuncLabel: {
      name: 'Create Function Label',
      selectLabelMessage: 'Please select the function label to create',
      noLabelSelected: 'No labels selected',
      confirmCreateMessage: 'Selected [{{length}}] labels, do you want to start creating?',
      startCreate: 'Start creating labels',
      createSuccess: 'Successfully created label [{{name}}]',
      createFailure: 'Failed to create label [{{name}}]',
      createFinish: 'Label creation completed',
    },
    listAllLabels: {
      name: 'View All Labels',
      selectError: 'Failed to get labels',
      labelList: 'Label List',
    },
  },
  labelGroup: {
    func: {
      name: 'Function Labels',
      labels: {
        article: {
          name: 'Article',
          description: 'Article function label',
        },
        message: {
          name: 'Message',
          description: 'Message function label',
        },
        link: {
          name: 'Friend Link',
          description: 'Friend link function label',
        },
        history: {
          name: 'History',
          description: 'History function label',
        },
        album: {
          name: 'Album',
          description: 'Album function label',
        },
        about: {
          name: 'About',
          description: 'About function label',
        },
        banner: {
          name: 'Banner',
          description: 'Banner function label',
        },
      },
    },
    historyExtra: {
      name: 'History Extra Labels',
      labels: {
        warn: {
          name: 'History: Warning',
          description: 'History function label: Warning',
        },
        success: {
          name: 'History: Success',
          description: 'History function label: Success',
        },
        info: {
          name: 'History: Information',
          description: 'History function label: Information',
        },
        error: {
          name: 'History: Error',
          description: 'History function label: Error',
        },
        default: {
          name: 'History: Default',
          description: 'History function label: Default',
        },
      },
    },
    util: {
      name: 'Utility Labels',
      labels: {
        hiddenComment: {
          name: 'Hide Comment',
          description: 'Hide comment function label',
        },
      },
    },
  },
  api: {
    error: {
      network: 'Network connection error, please check your network connection or try again later',
      unauthorized: 'Unauthorized, please check your GitHub Token is correct',
      rateLimit: 'API call frequency is too high, please try again later',
      forbidden: 'Insufficient permissions, please check your GitHub Token is correct',
      invalidParams: 'Invalid request parameters, please check your input is correct',
    },
  },
}

export default lng
