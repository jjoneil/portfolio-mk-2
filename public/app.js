// - - - - - -  creating transitions - - - - //
//https://vuejs.org/v2/guide/transitions.html//
// - - - - - - - - - - - - - - - - - - - - - //

var myRouter = new VueRouter ({
  routes: [
    {
      path: '/',
      component: (resolve, reject)=>{
        $.get('/partials/about.html', (htmlFromServer)=>{
          var newComponent = {
            template: htmlFromServer,
            created: ()=>{
              console.log('created the projects component')
            },
            destroyed: function(){ console.log('destroyed the about component')}
          }
          resolve(newComponent)
        })
      }
    },
    {
      path: '/resume',
      component: (resolve, reject)=>{
        $.get('/partials/resume.html', (htmlFromServer)=>{
          var newComponent = {
            template: htmlFromServer,
            created: ()=>{
              console.log('created the projects component')
            },
            destroyed: function(){ console.log('destroyed the resume component')}
          }
          resolve(newComponent)
        })
      }
    },
    {
      path: '/projects',
      component: (resolve, reject)=>{
        $.get('/partials/projects.html', (htmlFromServer)=>{
          var newComponent = {
            template: htmlFromServer,
            created: ()=>{
              console.log('created the projects component')
            },
            destroyed: function(){ console.log('destroyed the projects component')}
          }
          resolve(newComponent)
        })
      }
    }
  ]
})

var mainVm = new Vue({
  el: '#app',
  router: myRouter,
  created: function(){
    setTimeout(()=>{this.show = true}, 500)
  },
  data: {
    show: false
  }
})
