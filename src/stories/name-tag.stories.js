import { storiesOf } from '@storybook/angular';
import { withActions } from '@storybook/addon-actions';
import { NameTagComponent } from '../app/name-tag/name-tag.component';
import { text, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Name Tag', module)

stories.addDecorator(withKnobs);
stories.addDecorator(withActions('mouseover'));

stories.add('Short name', () => ({
    component: NameTagComponent,
    props: {
        name: text('name', 'Clark Green'),
    },
}))
stories.add('Long name', () => ({
    component: NameTagComponent,
    props: {
        name: text('name', 'Paige Alexandra Zaleppa')
    }
}))
stories.add('No name', () => ({
    component: NameTagComponent,
    props: {
        name: text('name', '')
    }
}))