var chart = new MKPieChart('.agenda-pie', {
                    width       : 90,
                    height      : 89,
                    padding     : 0,
                    line_width  : 6
                }).render([{
                    type    : 'yes',
                    votes   : 10
                }, {
                    type    : 'didnt',
                    votes   : 150
                }, {
                    type    : 'no',
                    votes   : 5
                }]);

var label = chart.$element.append('span');
label.classed('agenda-percent', true);
label.append('span').text('56%');
label.node().appendChild(document.createTextNode('התאמה'));