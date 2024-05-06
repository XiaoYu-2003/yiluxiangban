//模块一：显示弹框
// 1.点击切换，弹框显示
document.querySelector('.switch-btn').addEventListener('click',()=>{
  document.querySelector('.switch').style.display = 'block'
  document.querySelector('body').style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
  document.querySelector('header').style.backgroundColor = 'rgb(53,220,200)'
})
// 2.点击取消，弹框隐藏
document.querySelector('.btn-right').addEventListener('click',()=>{
  document.querySelector('.switch').style.display = 'none'
  document.querySelector('header').style.backgroundColor = 'rgb(2,213,200)'
  document.querySelector('body').style.backgroundColor = '#FFFFFF'
})
// 2.点击确定，弹框隐藏
document.querySelector('.btn-cancel').addEventListener('click',()=>{
  document.querySelector('.switch').style.display = 'none'
  document.querySelector('header').style.backgroundColor = 'rgb(2,213,200)'
  document.querySelector('body').style.backgroundColor = '#FFFFFF'
})


    // JavaScript 代码用于处理导航栏点击事件  
    const navbarItems = document.querySelectorAll('.navbar-item');  
  
    navbarItems.forEach(item => {  
      item.addEventListener('click', () => {  
        // 移除其他项的激活状态  
        navbarItems.forEach(navItem => {  
          navItem.classList.remove('active');  
        });  
  
        // 激活当前项  
        item.classList.add('active');  
  
        // 根据点击的导航项执行相应的操作  
        switch (item.id) {  
          case 'home':  
            // 处理首页逻辑  
			window.location.href="index2.html";
            console.log('跳转到首页');  
            break;  
          case 'doctor':  
            // 处理医生列表逻辑  
            console.log('跳转到医生列表');  
            break;  
          case 'appointment':  
            // 处理预约陪诊逻辑  
            console.log('跳转到预约陪诊');  
            break;  
          case 'profile':  
            // 处理我的页面逻辑  
            console.log('跳转到我的页面');  
			window.location.href="person.html";
            break;  
        }  
      });  
    });  