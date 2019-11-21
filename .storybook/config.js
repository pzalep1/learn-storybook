import { configure, addParameters, addDecorator } from '@storybook/angular';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y} from '@storybook/addon-a11y';
import '@storybook/addon-console';

addDecorator(withA11y);
configure(require.context('../src', true, /\.stories\.[tj]s$/), module);


addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});