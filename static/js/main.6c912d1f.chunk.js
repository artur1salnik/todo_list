(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(10),r=n.n(c),i=n(8),l=n(6),s=n(7),u=n(2),b=n(3),d=n(5),h=n(4),f=(n(16),n(0)),j=function(t){var e=t.toDo,n=t.done;return Object(f.jsxs)("div",{className:"header d-flex",children:[Object(f.jsx)("h1",{children:"Todo list"}),Object(f.jsxs)("h5",{children:[e," more to do, ",n," done"]})]})},m=n(11),p=(n(18),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.isDone,a=t.isImportant,o=t.onClickDelete,c=t.onClickImportant,r=t.onClickDone,i="todo-item",l="btn btn-outline-success btn-sm",s="btn btn-outline-primary btn-sm float-end";return n&&(i+=" done",l="btn btn-success btn-sm"),a&&(i+=" important",s="btn btn-primary btn-sm float-end"),Object(f.jsxs)("div",{className:i,children:[Object(f.jsx)("button",{onClick:r,type:"button",className:l,children:Object(f.jsx)("i",{class:"fa fa-check-square-o"})}),Object(f.jsx)("span",{className:"todo-item-label",children:e}),Object(f.jsx)("button",{onClick:o,type:"button",className:"btn btn-outline-danger btn-sm float-end",children:Object(f.jsx)("i",{className:"fa fa-trash-o"})}),Object(f.jsx)("button",{onClick:c,type:"button",className:s,children:Object(f.jsx)("i",{className:"fa fa-exclamation-circle"})})]})}}]),n}(o.a.Component)),O=(n(19),function(t){var e=t.todos,n=t.onClickDelete,a=t.onClickImportant,o=t.onClickDone,c=e.map((function(t){var e=t.id,c=Object(m.a)(t,["id"]);return Object(f.jsx)("li",{className:"list-group-item",children:Object(f.jsx)(p,Object(l.a)(Object(l.a)({},c),{},{onClickDelete:function(){return n(e)},onClickImportant:function(){return a(e)},onClickDone:function(){return o(e)}}))},t.id)}));return Object(f.jsx)("ul",{className:"list-group",children:c})}),v=(n(20),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={searchValue:""},t.onChangeSearch=function(e){t.setState({searchValue:e.target.value}),t.props.onChangeSearch(e.target.value)},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsx)("input",{type:"text",className:"form-control search",placeholder:"Search",value:this.state.searchValue,onChange:this.onChangeSearch})}}]),n}(o.a.Component)),C=(n(21),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(b.a)(n,[{key:"render",value:function(){var t=this,e=this.buttons.map((function(e){var n=t.props.filter===e.name?"btn-info":"btn-outline-secondary";return Object(f.jsx)("button",{type:"button",className:"btn ".concat(n),onClick:function(){return t.props.onChangeFilter(e.name)},children:e.label},e.name)}));return Object(f.jsx)("div",{className:"btn-group",children:e})}}]),n}(o.a.Component)),x=(n(22),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmitForm=function(e){e.preventDefault(),t.state.label.length&&(t.props.onClickAdd(t.state.label),t.setState({label:""}))},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:"item-add-form d-flex",onSubmit:this.onSubmitForm,children:[Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"What do you need to do?",value:this.state.label,onChange:this.onLabelChange}),Object(f.jsx)("button",{className:"btn btn-outline-secondary add-todo",children:"Add todo"})]})}}]),n}(o.a.Component)),g=(n(23),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={todoData:[],searchValue:"",filter:"all"},t.deleteTodoItem=function(e){t.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(s.a)(n.slice(0,a)),Object(s.a)(n.slice(a+1)))}}))},t.addTodoItem=function(e){var n=t.createTodoItem(e);t.setState((function(t){var e=t.todoData;return{todoData:[].concat(Object(s.a)(e),[n])}}))},t.toggleProperty=function(t,e,n){var a=t.findIndex((function(t){return t.id===e})),o=t[a],c=Object(l.a)(Object(l.a)({},o),{},Object(i.a)({},n,!o[n]));return[].concat(Object(s.a)(t.slice(0,a)),[c],Object(s.a)(t.slice(a+1)))},t.onClickImportant=function(e){t.setState((function(n){var a=n.todoData;return{todoData:t.toggleProperty(a,e,"isImportant")}}))},t.onClickDone=function(e){t.setState((function(n){var a=n.todoData;return{todoData:t.toggleProperty(a,e,"isDone")}}))},t.onChangeSearch=function(e){t.setState({searchValue:e})},t.onChangeFilter=function(e){t.setState({filter:e})},t}return Object(b.a)(n,[{key:"createTodoItem",value:function(t){return{id:Date.now().toString(),label:t,isImportant:!1,isDone:!1}}},{key:"searchTodos",value:function(t,e){return""===e?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))}},{key:"filterTodos",value:function(t,e){switch(e){case"active":return t.filter((function(t){return!t.isDone}));case"done":return t.filter((function(t){return t.isDone}));case"all":default:return t}}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.searchValue,a=t.filter,o=this.filterTodos(this.searchTodos(e,n),a),c=e.filter((function(t){return t.isDone})).length,r=e.filter((function(t){return!t.isDone})).length;return Object(f.jsxs)("div",{className:"todo-app",children:[Object(f.jsx)(j,{toDo:r,done:c}),Object(f.jsxs)("div",{className:"search-filter d-flex",children:[Object(f.jsx)(v,{onChangeSearch:this.onChangeSearch}),Object(f.jsx)(C,{filter:a,onChangeFilter:this.onChangeFilter})]}),o.length?Object(f.jsx)(O,{todos:o,onClickDelete:this.deleteTodoItem,onClickImportant:this.onClickImportant,onClickDone:this.onClickDone}):Object(f.jsx)("div",{className:"emptyList",children:"The list is empty"}),Object(f.jsx)(x,{onClickAdd:this.addTodoItem})]})}}]),n}(o.a.Component));r.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.6c912d1f.chunk.js.map