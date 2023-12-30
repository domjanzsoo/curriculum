exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
}) => {
    // if (stage === "build-html") {
        actions.setWebpackConfig({
            externals: ['canvas']
        })
    // }
};