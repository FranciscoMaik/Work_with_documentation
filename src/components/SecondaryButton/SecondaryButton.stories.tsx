import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SecondaryButton } from '.';

export default {
  title: 'Secondary Button',
  component: SecondaryButton,
} as ComponentMeta<typeof SecondaryButton>;

const Template: ComponentStory<typeof SecondaryButton> = function (args) {
  return <SecondaryButton {...args} />;
};

export const Default = Template.bind({});

export const WithName = Template.bind({});
WithName.args = {
  name: 'ClickShow',
};
