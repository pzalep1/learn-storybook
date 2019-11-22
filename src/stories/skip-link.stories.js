import { storiesOf } from '@storybook/angular';
import { withActions } from '@storybook/addon-actions';
import { SkipLinkComponent } from '../app/skip-link/skip-link.component';

storiesOf('Skip Link', module)
    .addDecorator(withActions('mouseover'))
    .add('Skip to main content', () => ({
        component: SkipLinkComponent
    })
    )