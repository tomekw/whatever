/**
 *  @param {String} rawText
 *  @param {String} [separator=,]
 *  @returns {Object[]}
 */
var textToJSON = function (rawText, separator) {
    var rows = rawText.split('\n').map(function (line) {
        return line.split(separator || ',');
    });

    var columnNames = rows.shift().map(function (columnName) {
        return columnName.trim();
    });

    return JSON.stringify(rows.map(function (row) {
        return row.reduce(function (seed, columnValue, columnIndex) {
            seed[columnNames[columnIndex]] = columnValue;
            return seed;
        }, {});
    }));
};
