import Home from './pages/home';
import Button from './pages/button';
import Checkbox from './pages/checkbox';
import CheckboxGroup from './pages/checkbox-group';
import Dialog from './pages/dialog';
import Icon from './pages/icon';
import Menu from './pages/menu';
import Radio from './pages/radio';
import Ripple from './pages/ripple';
import Sidepanel from './pages/sidepanel';
import Snackbar from './pages/snackbar';
import Textfield from './pages/textfield';
import { NotFound } from './pages/errors';

let routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/button',
		component: Button,
		name: 'Button',
	},
	{
		path: '/checkbox',
		component: Checkbox,
		name: 'Checkbox',
	},
	{
		path: '/checkbox/checkbox-group',
		component: CheckboxGroup,
		name: 'Checkbox Group',
	},
	{
		path: '/dialog',
		component: Dialog,
		name: 'Dialog',
	},
	{
		path: '/icon',
		component: Icon,
		name: 'Icon',
	},
	{
		path: '/menu',
		component: Menu,
		name: 'Menu',
	},
	{
		path: '/radio-button',
		component: Radio,
		name: 'Radio Button',
	},
	{
		path: '/ripple',
		component: Ripple,
		name: 'Ripple',
	},
	{
		path: '/side-panel',
		component: Sidepanel,
		name: 'Sidepanel',
	},
	{
		path: '/snackbar',
		component: Snackbar,
		name: 'Snackbar',
	},
	{
		path: '/textfield',
		component: Textfield,
		name: 'Textfield',
	},
	{
		path: '*',
		component: NotFound,
	},
];

export default routes;