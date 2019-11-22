import { storiesOf } from '@storybook/angular';
import { withActions } from '@storybook/addon-actions';
import { NamePlateComponent } from '../app/name-plate/name-plate.component';

const stories = storiesOf('Name Plate', module)

stories.addDecorator(withActions('mouseover'));

stories.add('Dwight K. Schrute', () => ({
    component: NamePlateComponent,
    props: {
        employee: {
            name: 'Dwight K. Schrute',
            title: 'Assistant to the Regional Manager'
        },
    },
}));