const h1=React.createElement('h1',{id:"h1"},'Hello World');
const h11=React.createElement('h1',{id:"h11"},'Welcome to React');
const div=React.createElement('div',{},[h1,h11]);

ReactDOM.render(div,document.getElementById('root'));