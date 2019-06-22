import {untrailingSlashIt, trailingSlashIt, leadingSlashIt} from './utils';

export default function backstopConfig(nonProductionBaseUrl, productionBaseUrl, pathsToTest, siteName) {

    const backstopDataDir = `backstop_data/${siteName}`;
    const delayTime = 1500;
    const acceptableThreshold = 0.1;

    const config = {
        'id': siteName,
        asyncCaptureLimit: 10,
        'viewports': [{
                'name': 'phone',
                'width': 320,
                'height': 480
            },
            {
                'name': 'desktop',
                'width': 1920,
                'height': 1080
            }
        ],
        'scenarios': [{
            'label': 'Homepage',
            'url': trailingSlashIt(nonProductionBaseUrl),
            'referenceUrl': trailingSlashIt(productionBaseUrl),
            'hideSelectors': [],
            'selectors': ['document'],
            'readyEvent': null,
            'delay': delayTime,
            'misMatchThreshold': acceptableThreshold
        }],
        'paths': {
            'ci_report': `${backstopDataDir}/ci_report`,
            'json_report': `${backstopDataDir}/json_report`,
            'html_report': `${backstopDataDir}/html_report`,
            'bitmaps_reference': `${backstopDataDir}/bitmaps_reference`,
            'bitmaps_test': `${backstopDataDir}/bitmaps_test`,
            'compare_data': `${backstopDataDir}/bitmaps_test/compare.json`,
            'casper_scripts': `${backstopDataDir}/casper_scripts`,
            'engine_scripts': `${backstopDataDir}/engine_scripts`
        },
        'engine': 'puppeteer',
        'report': ['browser', 'json'],
        'casperFlags': [],
        'debug': false,
        'port': 3001
    };


    const scenarios = pathsToTest.map(function (path) {

        return {
            'label': path,
            'url': untrailingSlashIt(nonProductionBaseUrl) + leadingSlashIt(path),
            'referenceUrl': untrailingSlashIt(productionBaseUrl) + leadingSlashIt(path),
            'hideSelectors': [],
            'selectors': ['document'],
            'readyEvent': null,
            'delay': delayTime,
            'misMatchThreshold': acceptableThreshold
        };

    });

    config.scenarios = config.scenarios.concat(scenarios);

    return config;

}