/**
 * @since 2016-11-18 13:56
 * @author vivaxy
 */

const copyFiles = (options) => {

    const {
        presets,
    } = options;

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

    console.log(`copying files...`);
    presets.copyFiles(files);
};

const updatePackageJSON = (options) => {

    const {
        project,
        scaffold,
        presets,
    } = options;

    const projectGit = project.git || {};

    const filename = `package.json`;

    console.log(`updating package.json...`);
    presets.updateJson(filename, (data) => {

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
                ...repository,
                url: projectGit.repositoryURL,
            },
            keywords,
            author,
            license,
            bugs: {
                ...bugs,
                url: undefined,
            },
            dependencies,
            devDependencies,
            peerDependencies,
        };
    });

};

export const init = (options) => {
    copyFiles(options);
    updatePackageJSON(options);
};
