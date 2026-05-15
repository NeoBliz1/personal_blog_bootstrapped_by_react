import type { PostConfigWithComponent } from 'app/types/typesIndex';

import FirstGradeArithmeticTrainer from 'app/blog/pages/1gradeArithmeticTrainer';
import TwentyFivePlusFiveClock from 'app/blog/pages/25plus5clockPost';
import JavaScriptCalculator from 'app/blog/pages/calcPost';
import DrumMachineFullArticle from 'app/blog/pages/dmPost';
import MarkdownPreviewerFullArticle from 'app/blog/pages/mpPost';
import RandomQuoteMachineFullArticle from 'app/blog/pages/rqmPost';
import WCPostFullArticle from 'app/blog/pages/wcPost';
import KRSAPostFullArticle from 'app/blog/pages/krsaPost';

export const POSTS_DATA: PostConfigWithComponent[] = [
	{
		id: 'quote',
		path: 'rqmPost',
		title: 'Some quotes can save lives.',
		description: 'FreeCodeCamp Project.',
		imgSrc: require('app/styles/imgs/today_was_a_good_day.jpg'),
		altText: 'Random Quote Machine',
		component: RandomQuoteMachineFullArticle,
	},
	{
		id: 'markdown',
		path: 'mpPost',
		title: 'Parsing & Interpreting making it easy.',
		description: 'FreeCodeCamp Project.',
		imgSrc: require('app/styles/imgs/lyman-hansel-gerona-C3POunsplash_tiny.jpg'),
		altText: 'Markdown Previewer',
		component: MarkdownPreviewerFullArticle,
	},
	{
		id: 'drum',
		path: 'dmPost',
		title: 'Set drum make fun.',
		description: 'FreeCodeCamp Project.',
		imgSrc: require('app/styles/imgs/yianni-mathioudakis-drum_pad-unsplash_tiny.jpg'),
		altText: 'Drum Machine',
		component: DrumMachineFullArticle,
	},
	{
		id: 'calculator',
		path: 'calcPost',
		title: 'Calculations - it\'s simple.',
		description: 'FreeCodeCamp Project.',
		imgSrc: require('app/styles/imgs/recha-oktaviani-calculator-unsplash_tiny.jpg'),
		altText: 'JS Calculator',
		component: JavaScriptCalculator,
	},
	{
		id: 'clock',
		path: '25plus5clockPost',
		title: 'Time and Tide waits for none.',
		description: 'FreeCodeCamp Project.',
		imgSrc: require('app/styles/imgs/jessica-delp-_25+5clock-unsplash_tiny.jpg'),
		altText: 'Pomodoro Clock',
		component: TwentyFivePlusFiveClock,
	},
	{
		id: 'arithmetic',
		path: '1gradeArithmeticTrainer',
		title: 'Money likes counting.',
		description: 'Pet Project.',
		imgSrc: require('app/styles/imgs/DALL·E_2023_01_13_06_30_13_Arithmetic_simulator_for_first_grade_tiny.png'),
		altText: 'First Grade Arithmetic Trainer',
		component: FirstGradeArithmeticTrainer,
	},
	{
		id: 'chat',
		path: 'wcPost',
		title: 'Website chat.',
		description: 'Messages via telegram.',
		imgSrc: require('app/styles/imgs/simple.jpg'),
		altText: 'Website chat',
		component: WCPostFullArticle,
	},
	{
		id: 'krsa',
		path: 'krsaPost',
		title: 'Kafka raft scram auth',
		description: 'Durable, persistent, reliable message broker.',
		imgSrc: require('app/styles/imgs/kafka_raft.png'),
		altText: 'Kafka raft scram auth',
		layoutClasses: 'col-11 col-sm-11 col-lg-6 col-xxl-5',
		component: KRSAPostFullArticle,
	},
];
