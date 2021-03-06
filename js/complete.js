// var SumModule = {
//     sumSeries : function(n) {
//         var total = 0;
//         for (var i = 0; i <= n; i++) {
//             total += i;
//         }
//         return total;
//     },
//     sumOddSeries : function(n) {
//         var total = 0;
//         for (var i = 0; i <= n; i++) {
//             if (i % 2 == 1) {
//                 total += i;
//             }
//         }
//         return total;
//     }
// };
// var DOMUtils = {
//     getFile : function(source, type, callback) {
//         var head = document.getElementsByTagName('head')[0],
//             element = null;
//         if (type == 'css') {
//             element = document.createElement('link');
//             element.type = 'text/css';
//             element.rel = 'stylesheet';
//             element.href = source;
//         } else {
//             element = document.createElement('script');
//             element.async = true;
//             if (typeof callback !== 'undefined') {
//                 element.addEventListener('load', callback);
//             }
//             element.src = source;
//         }
//         head.appendChild(element);
//     },
//     loadAssets : function(assets) {
//         assets.forEach(function(assetObj) {
//             DOMUtils.getFile(assetObj.source, assetObj.type, assetObj.callback);
//         });
//     },
//     jQueryLoaded : function() {
//         if (typeof jQuery !== 'undefined') {
//             DOMUtils.changeLead("I have my styles now, I'm so comfy and warm");
//             DOMUtils.loadAssets([{
//                 source : "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js",
//                 type : "script",
//                 callback : undefined
//             }]);
//             // DOMUtils.insertPics(['chuck','arnold','steven','jean']);
//             DOMUtils.bindNavigation();

//             DOMUtils.buildTemplate(
//                 [
//                     { name: "Kurt", title: "Programmer", salary: 1000 },
//                     { name: "Brian", title: "Programmer", salary: 1500 },
//                     { name: "Robert", title: "Programmer", salary: 2000 }
//                 ],
//                 0, 'employee-list'
//             );
//         }
//     },
//     changeLead : function(text) {
//         $('#lead-text').html(text);
//     },
//     insertPics : function(arrayOfNames) {
//         var html = "";
//         for (var i = 0; i < arrayOfNames.length; i++) {
//             html += '<img height="140" width="140" src="/imgs/'+arrayOfNames[i]+'.jpg" class="img-thumbnail">';
//         }
//         $(html).insertAfter('.inner.cover');
//     },
//     ajaxRequest : function(method, path, callback) {
// 		var request = new XMLHttpRequest();
// 		request.open(method, path);
// 		request.onload = callback;
// 		request.send();
// 	},
// 	getPartial : function(partial) {
// 		DOMUtils.ajaxRequest('GET', '/views/partials/'+partial, function(event) {
// 			if (this.status >= 200 && this.status < 400) {
// 				var partialHtmlString = this.responseText;
// 				var meat = document.getElementsByClassName('inner cover')[0];
// 				meat.innerHTML = partialHtmlString;
// 			} else {
// 				console.log('Error retrieving partial');
// 			}
// 		});
// 	},
// 	bindNavigation : function() {
// 		var tabs = document.getElementsByClassName('masthead-nav')[0].children;
// 		var getPartial = function() {
// 			DOMUtils.getPartial(this.id);
// 			DOMUtils.makeActive(this);
// 			history.replaceState( {} , '', '/'+this.id );
// 		};
// 		for (var i = 0; i < tabs.length; i++){
// 			tabs[i].addEventListener('click', getPartial);
// 		}
// 	},
// 	makeActive : function(element) {
// 		var tabs = element.parentElement.children;
// 		for (var i = 0; i < tabs.length; i++) {
// 			tabs[i].classList.remove('active');
// 		}
// 		element.classList.add('active');
// 	},
// 	buildTemplate : function(dataArray, templateIndex, target) {
//         // var template = document.getElementById(templateName).innerHTML;
//         // var generatedHtmlString = _.template(template)(dataObj);
//         // document.getElementById(target).innerHTML = generatedHtmlString;

//         var generatedHTML = "";
//         var template = new Template();
//         dataArray.forEach(function(object) {
//             generatedHTML += template['template_'+templateIndex](object);
//         });
//         document.getElementById(target).innerHTML = generatedHTML;
//     },
//     // underscoreLoaded : function() { 
//     //     DOMUtils.buildTemplate(
//     //         { 
//     //             employees : [
//     //                 { name: "Kurt", title: "Programmer", salary: 1000 },
//     //                 { name: "Brian", title: "Programmer", salary: 1500 },
//     //                 { name: "Robert", title: "Programmer", salary: 2000 }
//     //             ]
//     //         },
//     //         'employee-template',
//     //         'employee-list'
//     //     )
//     // }
// };
// var Template = function() {};
// Template.prototype = {
// 	template_0 : function(employee) {
// 		return ['<div class="person-list-item col-md-12">',
// 					'<div class="col-md-4">',
// 						'<h4>'+employee.name+'</h4>',
// 					'</div>',
// 					'<div class="col-md-4">',
// 						'<label>Title</label>',
// 						'<p>'+employee.title+'</p>',
// 			        '</div>',
// 			        '<div class="col-md-4">',
// 				        '<label>Salary</label>',
// 				        '<p>'+employee.salary+' gbh</p>',
// 				    '</div>',
// 				'</div>'].join('');
// 	}	
// }
// DOMUtils.loadAssets([
//     {
//         source : "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css",
//         type : "css",
//         callback: undefined
//     },
//     {
//         source : "/css/cover.css",
//         type : "css",
//         callback: undefined
//     },
//     {
//         source : "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js",
//         type : "script",
//         callback : DOMUtils.jQueryLoaded
//     }
//     // {
//     //     source : "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js",
//     //     type : "script",
//     //     callback : DOMUtils.underscoreLoaded
//     // }
// ]);