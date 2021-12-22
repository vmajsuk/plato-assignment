# Plato Assignment

## Requirements

- [x] When I open a page, I see the list of the users and the tasks for the first user
- [x] When I select a user, the tasks for the selected user is displayed on the right side.
- [x] Each user has a separate page. That is, when I select the user with id 1 the page /users/1 opens
- [x] Available tasks for each user must be loaded separately when we select a user.
- [x] A selected user must have an icon or specific styles
- [x] Each task must have a control to mark it as Completed
- [x] Once a task is marked as Completed this can't be changed.
- [x] A completed task must not have a control, only icon or specific styles

## Notes

- [x] The app should be written with React and Typescript To save time, use create-reaсt-app
- [x] Styling is not important. The app should only looks like in the picture and be accessible
- [x] Use one of components library or native elements to display controls, list and other elements
- [x] Data for Users module should be fetched from https://jsonplaceholder.typicode.com/users
- [x] Data for Tasks List module should be fetched from https://jsonplaceholder.typicode.com/todos
- [x] The provided API doesn't allow you to update data. To mark a task as completed send a request to, wait for response and then update local state of the app
- [ ] The app should be available on Internet (to be developed in codesandbox.io, to be deployed to https://vercel.com/ or a similar platform)
- [x] It is up to you what components to create. However, we ask you to create a component Task , to display one task, with the following contract:
  - [x] If task is not completed it must take only these properties: `title`, `isCompleted`, `onComplete`
  - [x] If task is completed it must take only these properties: `title`, `isCompleted`
- [ ] The app should be developed like a production-ready application, but no need to implement everything perfectly. For example, you can cover only one component to show how you write tests and skip tests for the rest of the components.
- [ ] Try not to spend more than 4 hours on this task
- [ ] If there are things which you think should be done or improved, please leave a comment about them

## Clarifications

- [ ] Persist data so that task marked as completed is persisted between page reloads
