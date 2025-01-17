import { within, userEvent } from '@storybook/testing-library';
import Page from './Page.svelte';

export default {
  title: 'Example/Page',
  component: Page,
  render: (args) => ({
    Component: Page,
    props: args,
  }),
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
    layout: 'fullscreen',
  },
};
export const LoggedOut = {};

// More on interaction testing: https://storybook.js.org/docs/svelte/writing-tests/interaction-testing
export const LoggedIn = {
  render: (args) => ({
    Component: Page,
    props: args,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
