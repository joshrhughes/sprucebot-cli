const path = require('path')
const { version, description } = require('../package.json')

const TEMP = path.join(__dirname, '../__TEST__')

module.exports = {
	version,
	description,
	TEMP,
	appname: 'sprucebot',
	gitUser: 'sprucelabsai',
	skillsKitRepo: 'https://github.com/sprucelabsai/sprucebot-skills-kit.git',
	platforms: {
		api: {
			repo: {
				name: 'com-sprucebot-api',
				env: './app',
				path: './api'
			},
			pm2: {
				name: 'Sprucebot API'
			}
		},
		web: {
			repo: {
				name: 'com-sprucebot-web',
				env: './',
				path: './web'
			},
			pm2: {
				name: 'Sprucebot Web'
			}
		},
		dev: {
			repo: {
				name: 'sprucebot-dev-services',
				path: './dev-services',
				env: false
			},
			pm2: {
				name: 'Sprucebot Dev Services'
			}
		},
		relay: {
			repo: {
				name: 'sprucebot-relay',
				path: './relay',
				env: false
			},
			pm2: {
				name: 'Sprucebot Relay'
			}
		},
		'react-sprucebot': {
			repo: {
				name: 'react-sprucebot',
				path: './react-sprucebot',
				env: false
			},
			pm2: null
		},
		'sprucebot-cli': {
			repo: {
				name: 'sprucebot-cli',
				path: './sprucebot-cli',
				env: false
			},
			pm2: null
		},
		'sprucebot-node': {
			repo: {
				name: 'sprucebot-node',
				path: './sprucebot-node',
				env: false
			},
			pm2: null
		},
		'teammate-app': {
			repo: {
				name: 'sprucebot-teammate-app',
				path: './teammate-app',
				env: false
			},
			pm2: null
		},
		'sprucebot-skills-kit-server': {
			repo: {
				name: 'sprucebot-skills-kit-server',
				path: './sprucebot-skills-kit-server',
				env: false
			},
			pm2: null
		},
		'sprucebot-skills-kit': {
			repo: {
				name: 'sprucebot-skills-kit',
				path: './sprucebot-skills-kit',
				env: './'
			},
			pm2: null
		}
	},
	skillRemotes: [
		{
			label: 'hello.sprucebot.com',
			name: 'prod',
			url: 'https://api.sprucebot.com'
		},
		{
			label: 'alpha-hello.sprucebot.com',
			name: 'alpha',
			url: 'https://alpha-api.sprucebot.com'
		},
		{
			label: 'staging-hello.sprucebot.com',
			name: 'staging',
			url: 'https://staging-api.sprucebot.com'
		},
		{
			label: 'qa-hello.sprucebot.com',
			name: 'qa',
			url: 'https://qa-api.sprucebot.com'
		},
		{
			label: 'dev-hello.sprucebot.com',
			name: 'dev',
			url: 'https://dev-api.sprucebot.com'
		},
		{
			label: 'local.sprucebot.com',
			name: 'local',
			url: 'https://local-api.sprucebot.com',
			allowSelfSignedCerts: true
		}
	],
	skillProps: [
		{
			key: 'NAME',
			name: "Skill's name"
		},
		{
			key: 'SLUG',
			name: "Skill's slug"
		},
		{
			key: 'DESCRIPTION',
			name: 'Describe your skill in 144 characters'
		}
	]
}
