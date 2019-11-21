import { storiesOf } from '@storybook/angular';
import { withActions } from '@storybook/addon-actions';
import { ToggleComponent } from '../app/toggle/toggle.component';

storiesOf('Toggle Component', module)
    .addDecorator(withActions('mouseover'))
    .add('Clark Green', () => ({
        component: ToggleComponent,
        props: {
            name: 'Clark Green',
        },
    }))
    .addDecorator(withActions('mouseover'))
    .add('Clark Kent', () => ({
        component: ToggleComponent,
        props: {
            name: 'Clark Kent'
        }
    }))