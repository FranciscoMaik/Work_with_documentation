import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PrimaryButton, PrimaryButtonProps } from '.';

export default {
  title: 'Primary Button',
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = function (args) {
  return <PrimaryButton {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  name: 'Teste',
};
