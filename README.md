# &lt;ds-gtag-manager&gt;

[Polymer 3.0](https://polymer-library.polymer-project.org/3.0/docs/devguide/feature-overview) element to ease usage of [Google  Analytics tag](https://developers.google.com/analytics/devguides/collection/gtagjs).

## Setup
Install with git:
```bash
git clone https://github.com/dsunegin/ds-gtag-analytics.git
```

## Import In a Polymer 3 element:

```js
import './ds-gtag-analytics/ds-gtag-analytics.js';
```

## Usage
```html
<ds-gtag-analytics key="GA_MEASUREMENT_ID"></ds-gtag-analytics>
```
 Replace **GA_MEASUREMENT_ID** with the ID of the Google Analytics property to which you want to send data

## More Info

Contains the following specifications.

https://developers.google.com/analytics/devguides/collection/gtagjs/pages
https://developers.google.com/analytics/devguides/collection/gtagjs/events
https://developers.google.com/analytics/devguides/collection/gtagjs/screens
https://developers.google.com/analytics/devguides/collection/gtagjs/user-timings
https://developers.google.com/analytics/devguides/collection/gtagjs/exceptions
https://developers.google.com/gtagjs/reference/api
https://developers.google.com/gtagjs/reference/event
https://developers.google.com/gtagjs/reference/parameter

## Examples

Configure additional Google Analytics properties:

```.ts
gtag('config', 'GA_MEASUREMENT_ID_2');
```

Send [events](https://developers.google.com/analytics/devguides/collection/gtagjs/events):

```.ts
gtag('event', 'my_event');
```

Default Google Analytics [events](https://developers.google.com/analytics/devguides/collection/gtagjs/events)

```.ts
gtag('event', 'login', { method : 'Google' });
```

## Contribute
Feel free to extend it or propose new functionality

## License

[MIT License](https://github.com/dsunegin/ds-gtag-analytics/LICENSE)
