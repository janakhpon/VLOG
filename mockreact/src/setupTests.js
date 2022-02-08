// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './mocks/server';

// beforeAll(() => server.listen({
//     onUnhandledRequest: 'error',
// }))

// Establish requests interception layer before all tests.
beforeAll(() => server.listen())

// Removes any request handlers that were added on runtime (after the initial setupServer call).
// This function accepts an optional list of request handlers to override the initial handlers to re-declare the mock definition completely on runtime.
afterEach(() => server.resetHandlers())

// Clean up after all tests are done, preventing this
// interception layer from affecting irrelevant tests.
afterAll(() => server.close())
