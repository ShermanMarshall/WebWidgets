define(function(require) {

	class Table {
		constructor(obj) {
			this.headers = {};
			this.rows = [];
			this.columns = [];
			this.tableData = undefined;
			this.tableModel = {};
			this.headerStyles = '';
			this.rowStyles = '';

			if (typeof(obj) === typeof([])) {
				this.tableData = obj; 
			}
			if (typeof(obj.tableData) == typeof([])) {
				this.tableData = obj.tableData;
			}
			if (!this.tableData) {
				return
			}
			this.tableString = '<table>';

			var self = this;
			this.tableData.map(function(item) {
				for (var i in item) {
					self.headers[i] = '';
				}
				self.rows.push(item);
			});
		}
		writeTable() {
			var headers = this.writeHeaders();
			var body = this.writeBody();
			return `<table>${headers}${body}</table>`;
		}
		writeHeaders() {
			var self = this;
			var output = '<tr>';
			Object.keys(self.headers).map(function(hdr) {
				output += `<th class='${self.headerStyles}'>${hdr}</th>`;
			});
			output += '</tr>';
			console.log(output);
			return output;
		}
		writeBody() {
			var self = this;
                        var output = '';
                        self.rows.map(function(item) {
				output += `<tr class='${self.rowStyles}'>`;
				Object.keys(item).map(function(key) {
                                	output += `<td class='${self.columnStyles}'>${item[key]}</td>`;
				});
				output += '</tr>';
                        });
			console.log(output);
                        return output;
		}
	}

	return {table: Table};

});
