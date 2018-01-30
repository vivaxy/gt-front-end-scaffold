/**
 * @since 2017-03-21 15:59:47
 * @author vivaxy
 */

const Listr = require('listr');

const sleep = timeout => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};

const copyFiles = options => {
    const { presets } = options;

    const files = [
        'scripts/config.js',
        'scripts/dev.js',
        'src',
        '.babelrc',
        '.editorconfig',
        '.gitignore',
        '.prettierignore',
        'CHANGELOG.md',
        'LICENSE',
        'webpack.config.js',
        'yarn.lock'
    ];

    return async () => {
        await sleep(1000);
        await presets.copyFiles(files);
    };
};

const updatePackageJSON = options => {
    const { project, presets } = options;
    const projectGit = project.git || {};
    const filename = 'package.json';

    return async () => {
        await sleep(1000);
        await presets.updateJson(filename, data => {
            const {
                // to remove
                version,
                repository,

                // not changed
                ...rest
            } = data;

            return {
                ...rest,
                name: project.name,
                version: '0.0.0',
                reactScaffoldVersion: version,
                repository: {
                    type: repository.type,
                    url: projectGit.repositoryURL
                },
                bugs: {
                    url: projectGit.repositoryURL
                },
                homepage: projectGit.repositoryURL
            };
        });
    };
};

const updateREADME = options => {
    const { project, presets } = options;
    const filename = 'README.md';

    return async () => {
        await sleep(1000);
        await presets.updateFile(filename, data => {
            const projectData = data.split('----------')[1];
            return projectData.replace(
                /__________/g,
                `${project.name}

Initialized by [vivaxy/gt-front-end-scaffold](https://github.com/vivaxy/gt-front-end-scaffold)`
            );
        });
    };
};

const updateCHANGELOG = options => {
    const { presets } = options;
    const filename = 'CHANGELOG.md';

    return async () => {
        await sleep(1000);
        await presets.updateFile(filename, data => {
            return '';
        });
    };
};

export const init = options => {
    return new Listr([
        {
            title: 'copy files',
            task: copyFiles(options)
        },
        {
            title: 'update package.json',
            task: updatePackageJSON(options)
        },
        {
            title: 'update README.md',
            task: updateREADME(options)
        },
        {
            title: 'update CHANGELOG.md',
            task: updateCHANGELOG(options)
        }
    ]);
};

export const after = () => {
    console.log(`
        - Run 'yarn install' to initialize the project.
        - Run 'yarn dev' to start a development server.
        - Run 'yarn build' to build release files.
`);
};
