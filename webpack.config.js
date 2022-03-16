const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // entry quer saber o arquivo principal da aplicação;
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'] //fala quais arquivos ele pode ler;
    },
    module: { //ficam as configurações de como a aplicação vai se comportar quando estiver importando cada um dos arquivos implementados;
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }
};