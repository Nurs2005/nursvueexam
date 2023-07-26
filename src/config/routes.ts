export default [
  {
    name: 'HomePage',
    path: '/',
    component: () => import('@/views/HomePage.vue')
  },
  {
    name: 'UserPage',
    path: '/users',
    component: () => import('@/views/UserPage.vue'),
    redirect: () => {
      return { name: 'UserList' }
    },
    children: [
      {
        name: 'UserList',
        path: '',
        component: () => import('@/views/UserList.vue')
      },
      {
        name: 'UserAdd',
        path: 'add',
        component: () => import('@/views/UserAdd.vue')
      },
      {
        name:'UserId',
        path:':id',
        props: true,
        component:()=>import('@/views/UserIdPage.vue')
      }
    ]
  },
  {
    name:'LessonPage',
    path:'/lessons',
    component: ()=> import('@/views/LessonsPage.vue'),
    redirect:()=>{
      return{name:'LessonsList'}
    },
    children:[
      {
        name:'LessonsList',
        path:'',
        component:()=>import('@/views/LessonsList.vue')
      },
      {
        name:'LessonAdd',
        path:"add",
        component:()=>import('@/views/LessonAdd.vue')
      },
      {
        name:'LessonId',
        path:':id',
        props: true,
        component:()=>import('@/views/LessonIdPage.vue')
      }
    ]
  },
]
  
