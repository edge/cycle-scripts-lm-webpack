@{ div } = require '@cycle/dom';
--IMPORT--

exports.App = [sources:
	@vt$ = --STREAM--.of(
		div 'My Awesome Cycle.js app'
	);
	@sinks = {
		DOM: vtree$
	};
	sinks
];
