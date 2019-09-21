define(function(require) {
	class Table {
		constructor(obj) {
			this.headers = {};
			this.rows = [];
			this.columns = [];
			this.tableData = undefined;
			this.tableModel = {};
			this.headerStyles = 'col-sm-';
			this.columnStyles = 'col-sm-';
			this.rowStyles = 'row';

			if (typeof(obj) === typeof([])) {
				this.tableData = obj; 
			}
			if (typeof(obj.tableData) === typeof([])) {
				this.tableData = obj.tableData;
			}
			if (!this.tableData) {
				return;
			}

			var self = this;
			this.tableData.map(function(item) {
				for (var i in item) {
					self.headers[i] = '';
				}
				self.rows.push(item);
			});

			var proportion = parseInt(12 / Object.keys(self.headers).length);
			if (proportion > 1) {
				this.headerStyles += proportion;
				this.columnStyles += proportion;
			//modify column handling for larger responsive tables
			} else {
	
			}
		}
		writeTable() {
			var headers = this.writeHeaders();
			var body = this.writeBody();
			return `${headers}${body}`;
		}
		writeHeaders() {
			var self = this;
			var output = `<div class='${self.rowStyles}'>`;
			Object.keys(self.headers).map(function(hdr) {
				output += `<div class='${self.headerStyles}'>${hdr}</div>`;
			});
			output += '</div>';
			return output;
		}
		writeBody() {
			var self = this;
                        var output = '';
			var count = 0;
                        self.rows.map(function(item) {
				if (count++ < 20) {
					output += `<div class='${self.rowStyles}'>`;
					Object.keys(item).map(function(key) {
						output += `<div class='${self.columnStyles}'>${item[key]}</div>`;
					});
					output += '</div>';
				}
                        });
                        return output;
		}
	}

	return {table: Table};

});
