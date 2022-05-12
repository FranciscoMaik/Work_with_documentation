import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PrimaryButton } from '.';

export default {
  title: 'Primary Button',
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = function (args) {
  return <PrimaryButton {...args} />;
};

export const Default = Template.bind({});

export const WithTitle = Template.bind({});
WithTitle.args = {
  name: 'Com titulo',
};
