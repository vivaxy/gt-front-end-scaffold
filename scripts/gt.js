/**
 * @since 2016-11-18 13:56
 * @author vivaxy
 */

const Listr = require('listr');

let data;

const copyFiles = () => {

    const {
        presets,
    } = data;

    const files = [
        `source`,
        `test`,
        `.editorconfig`,
        `.eslintignore`,
        `.eslintrc.json`,
        `.gitignore`,
        `CHANGELOG.md`,
        `LICENSE`,
        `README.md`,
    ];

    return presets.copyFiles(files);
};

const updatePackageJSON = () => {

    const {
        project,
        scaffold,
        presets,
    } = data;

    const projectGit = project.git || {};

    const filename = `package.json`;

    return presets.updateJson(filename, (data) => {

        const {
            name,
            version,
            description,
            main,
            scripts,
            repository,
            keywords,
            author,
            license,
            bugs,
            homepage,
            dependencies,
            devDependencies,
            peerDependencies,
        } = data;

        return {
            name: project.name,
            version: `0.0.0`,
            reactScaffoldVersion: version,
            description,
            main,
            scripts,
            repository: {
                type: repository.type,
                url: projectGit.repositoryURL,
            },
            keywords,
            author,
            license,
            bugs: {
                url: undefined,
            },
            dependencies,
            devDependencies,
            peerDependencies,
        };
    });

};

exports.init = (options) => {

    data = options;

    return new Listr([
        {
            title: `copy files`,
            task: copyFiles,
        },
        {
            title: `update package.json`,
            task: updatePackageJSON,
        }
    ]);

};
