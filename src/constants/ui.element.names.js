
export default {

  /**
   * UI component
   */
  MAIN_TOOLBAR_TITLE: 'main-toolbar-title',
  MAIN_TOOLBAR_USER_AVATAR: 'main-toolbar-user-avatar',
  DRAWER_RESOURCE_TILE: {
    with: ({ resourceName }) => `drawer-${resourceName}-tile`,
  },

  /**
   * Auth component
   */

  AUTH_CONTAINER: 'va-login-container',
  AUTH_CONTAINER_TITLE: 'va-login-container-title',
  AUTH_USERNAME_INPUT: 'va-login-username',
  AUTH_PASSWORD_INPUT: 'va-login-password',
  AUTH_SIGN_IN_BUTTON: 'va-login-submit-button',

  /**
   * List
   */
  // The whole container of a Resource List
  RESOURCE_VIEW_CONTAINER: {
    with: ({ resourceName, view }) => `${resourceName}-${view}-container`,
  },

  // The whole container of a Resource List
  RESOURCE_VIEW_ACTIONS_CONTAINER: {
    with: ({ resourceName, view }) => `${resourceName}-${view}-actions-container`,
  },

  RESOURCE_VIEW_CONTAINER_TITLE: {
    with: ({ resourceName, view }) => `${resourceName}-${view}-container-title`,
  },

  RESOURCE_VIEW_CONTAINER_FIELDS: {
    with: ({ resourceName, view }) => `${resourceName}-${view}-container-fields`,
  },

  RESOURCE_VIEW_CONTAINER_FIELD: {
    with: ({ resourceName, view, field }) => `${field}-${resourceName}-${view}-container-field`,
  },

  // The button that redirects to a Create view
  RESOURCE_CREATE_BUTTON: {
    with: ({ resourceName }) => `${resourceName}-create-button`,
  },
  // The button that redirects to a Edit view
  RESOURCE_EDIT_BUTTON: {
    with: ({ resourceName, index }) => (index !== undefined
      ? `${resourceName}-${index}-edit-button`
      : `${resourceName}-edit-button`),
  },
  // A specific container of a Resource field inside an element of List
  RESOURCE_VIEW_ELEMENT_FIELD: {
    with: ({
      resourceName, view, field, index,
    }) => (index !== undefined
      ? `${resourceName}-${view}-element-${field}-${index}`
      : `${resourceName}-${view}-element-${field}`),
  },

  /**
   * Create
   */

  RESOURCE_VIEW_SUBMIT_BUTTON: {
    with: ({ resourceName, view }) => `${resourceName}-${view}-submit-button`,
  },

  /**
   * Edit
   */

  RESOURCE_EDIT_SUBMIT_BUTTON: {
    with: ({ resourceName, view }) => `${resourceName}-${view}-edit-button`,
  },

  RESOURCE_DELETE_BUTTON: {
    with: ({ resourceName, index }) => (index !== undefined
      ? `${resourceName}-delete-button-${index}`
      : `${resourceName}-delete-button`),
  },

  /**
   * Unauthorized
   */
  UNAUTHORIZED_DEFAULT_CONTAINER_HEADER: 'unauthorized-default-container-header',
  UNAUTHORIZED_DEFAULT_CONTAINER_HEADER_DEFAULT: 'unauthorized-default-container-header-default',
  UNAUTHORIZED_DEFAULT_CONTAINER_MESSAGE: 'unauthorized-default-container-message',
  UNAUTHORIZED_DEFAULT_CONTAINER_MESSAGE_DEFAULT: 'unauthorized-default-container-message-default',

  /**
   * Default Spinner
   */
  SPINNER_CONTAINER: 'spinner-container',
}
