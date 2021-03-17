(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{109:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},124:function(e,t,a){e.exports=a(140)},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(42),l=a.n(r),s=(a(129),a(110)),m=a(66),o=a(67),c=a(89),d=a(84),h=(a(130),a(131),a(132),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))});h.defaultProps={description:""};var p=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(h,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var u=a(97),g=a(155),b=a(154),v=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,w=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",errors:{imdbUrl:!1,imgUrl:!1,isTitle:!1,isImdbId:!1,isButtonDisable:!1}},e.handleChange=function(t){var a,i=t.target,n=i.name,r=i.value;e.setState((a={},Object(u.a)(a,n,r),Object(u.a)(a,"errors",{isButtonDisable:!1}),a))},e.handleSubmit=function(t){t.preventDefault();var a=e.props.onAdd,i=e.state,n=i.title,r=i.description,l=i.imgUrl,s=i.imdbUrl,m=i.imdbId;v.test(s)?v.test(l)?n&&l&&s&&m?(e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",errors:{imdbUrl:!1,imgUrl:!1,isTitle:!1,isImdbId:!1}}),a({title:n,description:r,imgUrl:l,imdbUrl:s,imdbId:m})):e.setState((function(e){return{errors:{imdbId:!e.imdbId,imdbUrl:!0,title:!e.title,imgUrl:!e.imgUrl,isButtonDisable:!0}}})):e.setState({errors:{imgUrl:!0,isButtonDisable:!0}}):e.setState({errors:{imdbUrl:!0,isButtonDisable:!0}})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl,l=e.imdbId,s=e.errors;return n.a.createElement(g.a,{onSubmit:this.handleSubmit,success:!0},n.a.createElement(g.a.Group,{widths:"equal"},n.a.createElement(g.a.Input,{transparent:!0,placeholder:"Title",type:"text",name:"title",error:s.title&&{content:"Please enter title",pointing:"below"},value:t,onChange:this.handleChange})),n.a.createElement(b.a,{placeholder:"Description",name:"description",value:a,onChange:this.handleChange}),n.a.createElement(g.a.Group,{widths:"equal"},n.a.createElement(g.a.Input,{transparent:!0,placeholder:"ImgUrl",type:"text",name:"imgUrl",value:i,error:!v.test(i)&&{content:"Please enter a valid url",pointing:"below"},onChange:this.handleChange}),n.a.createElement(g.a.Input,{transparent:!0,placeholder:"ImdbUrl",type:"text",name:"imdbUrl",value:r,error:!v.test(r)&&{content:"Please enter a valid url",pointing:"below"},onChange:this.handleChange})),n.a.createElement(g.a.Input,{transparent:!0,placeholder:"ImdbId",type:"text",name:"imdbId",value:l,error:s.imdbId&&{content:"Please enter imdb Id",pointing:"below"},onChange:this.handleChange}),n.a.createElement(g.a.Button,{disabled:!0===s.isButtonDisable},"Add Film"))}}]),a}(n.a.Component),f=a(109),M=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:f},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(p,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement("h1",null,"Add new film"),n.a.createElement(w,{onAdd:this.addMovie})))}}]),a}(i.Component);a(139);l.a.render(n.a.createElement(M,null),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.31eb00f4.chunk.js.map